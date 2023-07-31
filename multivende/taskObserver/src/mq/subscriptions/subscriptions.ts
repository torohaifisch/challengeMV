// Assign event subscription to event handler

import CONSTS from '../../config/constants'
import taskHandlers from './eventHandlers/task'

const subscriptions = [
  {
    eventName: CONSTS.RABBITMQ.EVENTS.SUBSCRIBE.TASK_PROCESSOR.TASK.CREATED,
    eventHandler: taskHandlers.create
  },
  {
    eventName: CONSTS.RABBITMQ.EVENTS.SUBSCRIBE.TASK_PROCESSOR.TASK.UPDATED,
    eventHandler: taskHandlers.update
  }
]
export default subscriptions
