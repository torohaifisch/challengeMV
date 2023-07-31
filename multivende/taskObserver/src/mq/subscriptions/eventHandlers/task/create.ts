import { PrismaClient } from '@prisma/client'
import { Logger } from 'winston'
import { BrokerAsPromised } from 'rascal'
import Validator from 'fastest-validator'
import createSchema from '../../eventSchemas/task/create'

const v = new Validator()

const check = v.compile(createSchema)

const createDocumentHandler = async (
  prisma: PrismaClient,
  logger: Logger,
  broker: BrokerAsPromised,
  data: {
    totalTasks: number
    timestamp: string
  }
) => {
  logger.info('Handling create task', data)
  // validate data
  const result = check(data)
  if (!result) throw new Error('invalid event data')
  await prisma.task.create({
    data: {
      taskState: { connect: { taskStateId: 1 } },
      timeStamp: new Date(data.timestamp),
      totalTasks: data.totalTasks
    }
  })
}

export default createDocumentHandler
