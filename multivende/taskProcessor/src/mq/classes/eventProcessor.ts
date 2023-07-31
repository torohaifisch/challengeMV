import { PrismaClient } from '@prisma/client'
import { Logger } from 'winston'
import { Message } from 'amqplib'
import { AckOrNack, BrokerAsPromised } from 'rascal'
import CONSTS from '../../config/constants'

class EventProcessor {
  private subsManager: {
    eventName: string
    eventHandler: (prisma: PrismaClient, logger: Logger, broker: BrokerAsPromised, data: object) => null
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

  addSubscription(eventName: string, eventHandler: () => null) {
    this.subsManager.push({ eventName, eventHandler })
  }

  addSubscriptions(subscriptions: { eventName: string; eventHandler: () => null }[]) {
    subscriptions.forEach((element) => {
      this.subsManager.push({ eventName: element.eventName, eventHandler: element.eventHandler })
    })
  }

  private processEvent = async (eventName: string, data: object) => {
    this.logger.info(`${CONSTS.RABBITMQ.LOGS.EVENT_PROCESSUNG} ${eventName}`)
    // check if eventBus is subscribed to eventName
    const eventSub = this.subsManager.find((element) => {
      return element?.eventName === eventName
    })
    // if we found a subscription
    if (eventSub) {
      await eventSub.eventHandler(this.prisma, this.logger, this.broker, data)
    } else {
      this.logger.warning(`${CONSTS.RABBITMQ.LOGS.NO_EVENT_SUB} ${eventName}`)
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
