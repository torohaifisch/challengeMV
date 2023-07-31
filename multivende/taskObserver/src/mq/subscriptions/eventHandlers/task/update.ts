import { PrismaClient } from '@prisma/client'
import Validator from 'fastest-validator'
import { Logger } from 'winston'
import { BrokerAsPromised } from 'rascal'
import updateSchema from '../../eventSchemas/task/update'

const v = new Validator()

const check = v.compile(updateSchema)

const update = async (
  prisma: PrismaClient,
  logger: Logger,
  broker: BrokerAsPromised,
  data: { taskId: number; taskProcessStateId: number; timestamp: string }
) => {
  logger.info('Handling task update', data)
  // validate data
  const result = check(data)
  if (!result) throw new Error('invalid event data')

  // guardar los items que no se pudieron updatear failed task
  if (data.taskProcessStateId === 4) {
    console.log('error')
  }

  const task = await prisma.task.findFirst({ where: { taskId: data.taskId } })

  if (!task) {
    throw new Error(`task with id: ${data.taskId} not found`)
  }
  if (task.taskStateId === 1 || task.taskStateId === 2) {
    const updatedTask = await prisma.task.update({
      where: { taskId: data.taskId },
      data: { tasksDone: { increment: 1 }, taskState: { connect: { taskStateId: 2 } } }
    })
    // juntar esto en una tx creo
    if (updatedTask.tasksDone === updatedTask.totalTasks) {
      await prisma.task.update({
        where: { taskId: data.taskId },
        data: { taskState: { connect: { taskStateId: 3 } } }
      })
    }
  }
}

export default update
