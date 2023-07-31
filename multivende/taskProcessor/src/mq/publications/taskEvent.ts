import { BrokerAsPromised } from 'rascal'
import Event from '../classes/event'
import CONSTS from '../../config/constants'

const taskEvent = {
  create: async (broker: BrokerAsPromised, totalTasks: number, timestamp: string) => {
    const event = new Event(CONSTS.RABBITMQ.EVENTS.PUBLISH.TASK.CREATED, { totalTasks, timestamp })
    await broker.publish(CONSTS.RABBITMQ.PUBLICATIONS.TASK_STATUS, event)
  },
  cancel: async (broker: BrokerAsPromised, taskId: number, timestamp: string) => {
    const event = new Event(CONSTS.RABBITMQ.EVENTS.PUBLISH.TASK.UPDATED, {
      taskId,
      timestamp
    })
    await broker.publish(CONSTS.RABBITMQ.PUBLICATIONS.TASK_STATUS, event)
  }
}

export default taskEvent
