import { Logger } from 'winston'
import rascal from 'rascal'
import EventProcessor from './classes/eventProcessor'
import subscriptionList from './subscriptions/subscriptions'
import CONSTS from '../config/constants'
import definitions from './config'
import { PrismaClient } from '@prisma/client'

const config = rascal.withDefaultConfig(definitions)
const mqSetup = async (prisma: PrismaClient, logger: Logger) => {
  const broker = await rascal.BrokerAsPromised.create(config)
  broker.on('error', (err) => {
    logger.error(CONSTS.ERRORS.MQ.BROKER_ERROR, err)
  })
  const p = [broker.subscribe(CONSTS.RABBITMQ.SUBSCRIPTIONS.TASK_PROCESSING)]

  const subsManager = new EventProcessor(prisma, logger, broker)
  subsManager.addSubscriptions(subscriptionList)

  const subscriptions = await Promise.all(p)
  subscriptions.forEach((subscription) => {
    subscription
      .on('message', (message, _content, ackOrNack) => {
        subsManager.processMessage(message, ackOrNack)
      })
      .on('error', (err) => {
        logger.error(CONSTS.ERRORS.MQ.SUBSCRIBER_ERROR, err)
      })
  })

  return broker
}

export default mqSetup
