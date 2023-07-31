import CONST from '../config/constants'
import Env from '../config/environment'

const env = Env()
const mq = CONST.RABBITMQ

type brokerType = 'direct' | 'fanout'
const bType = 'direct'

const conn = {
  $schema: './node_modules/rascal/lib/config/schema.json',
  vhosts: {
    '/': {
      connection: {
        host: env.mq.hostname,
        user: env.mq.username,
        password: env.mq.password,
        port: env.mq.port,
        vhost: env.mq.vhost,
        protocol: env.mq.protocol
      },
      exchanges: {
        'taskProcessor.exchange': {
          type: bType as brokerType,
          assert: false,
          check: true
        }
      },
      queues: {
        'taskProcessor.task-processing.queue': {
          assert: false,
          check: true
        }
      },
      bindings: [`${mq.BROKER.TASK_EXCHANGE}[${mq.BINDING.TASK_PROCESSING}] -> ${mq.QUEUE.TASK_PROCESSING}`],
      publications: {},
      subscriptions: {
        task_processing: {
          queue: mq.QUEUE.TASK_PROCESSING,
          vhost: '/',
          contentType: 'application/json'
        }
      }
    }
  }
}

export default conn
