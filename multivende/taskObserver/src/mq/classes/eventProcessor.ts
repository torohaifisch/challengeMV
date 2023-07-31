/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from '@prisma/client'
import { Logger } from 'winston'
import { Message } from 'amqplib'
import { AckOrNack, BrokerAsPromised } from 'rascal'
import CONSTS from '../../config/constants'

type DataType = {
  [key: string]: any
}
type GenericDataType<T> = DataType & T

class EventProcessor {
  private subsManager: {
    eventName: string
    eventHandler: (
      prisma: PrismaClient,
      logger: Logger,
      broker: BrokerAsPromised,
      data: GenericDataType<any>
    ) => Promise<void>
  }[]
  private prisma: PrismaClient
  private logger: Logger
  private broker: BrokerAsPromised

  constructor(prisma: PrismaClient, logger: Logger, broker: BrokerAsPromised) {
    this.prisma = prisma
    this.logger = logger
    this.broker = broker
    this.subsManager = []
  }

  addSubscription(eventName: string, eventHandler: () => Promise<void>) {
    this.subsManager.push({ eventName, eventHandler })
  }

  addSubscriptions(
    subscriptions: {
      eventName: string
      eventHandler: (
        prisma: PrismaClient,
        logger: Logger,
        broker: BrokerAsPromised,
        data: GenericDataType<any>
      ) => Promise<void>
    }[]
  ) {
    subscriptions.forEach((element) => {
      this.subsManager.push({ eventName: element.eventName, eventHandler: element.eventHandler })
    })
  }

  private processEvent = async (eventName: string, data: object) => {
    this.logger.info(`${CONSTS.RABBITMQ.LOGS.EVENT_PROCESSING} ${eventName}`)
    // check if eventBus is subscribed to eventName
    const eventSub = this.subsManager.find((element) => {
      return element?.eventName === eventName
    })
    // if we found a subscription
    if (eventSub) {
      await eventSub.eventHandler(this.prisma, this.logger, this.broker, data)
    } else {
      this.logger.warn(`${CONSTS.RABBITMQ.LOGS.NO_EVENT_SUB} ${eventName}`)
    }
  }

  processMessage = async (msg: Message | null, ackOrNack: AckOrNack) => {
    try {
      if (!msg) throw new Error('Received Null event message')
      const message = <{ eventType: string; content: object }>JSON.parse(msg.content.toString())
      await this.processEvent(message.eventType, message.content)
      ackOrNack()
    } catch (error) {
      if (error instanceof Error) {
        ackOrNack(error)
        this.logger.error(error.message)
      }
    }
  }
}

export default EventProcessor
