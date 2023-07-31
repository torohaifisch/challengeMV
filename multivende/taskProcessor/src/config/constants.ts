const CONSTS = {
  ENV: {
    PROD: 'production',
    DEV: 'development',
    TEST: 'test'
  },
  HTTP: {
    CODES: {
      OK: 200,
      INTERNAL_SERVER_ERROR: 500,
      BAD_REQUEST: 400,
      UNAUTHORIZED: 401,
      NOT_FOUND: 404,
      BAD_GATEWAY: 502
    },
    METHODS: {
      POST: 'POST',
      GET: 'GET',
      DELETE: 'DELETE'
    }
  },
  RABBITMQ: {
    BROKER: {
      TASK_EXCHANGE: 'taskProcessor.exchange'
    },
    BINDING: {
      TASK_PROCESSING: 'task_processing'
    },
    QUEUE: {
      TASK_PROCESSING: 'taskProcessor.task-processing.queue'
    },
    SUBSCRIPTIONS: {
      TASK_PROCESSING: 'task_processing'
    },
    // correspond to the names of the keys in the publications array at mq config file
    PUBLICATIONS: {
      TASK_STATUS: 'task_status'
    },
    PROTOCOL: 'amqp',
    AUTH: {
      PLAIN: 'PLAIN',
      EXTERNAL: 'EXTERNAL',
      AMQPLAIN: 'AMQPLAIN'
    },
    EVENTS: {
      PUBLISH: {
        TASK: {
          COMPLETED: 'taskCompleted',
          CREATED: 'taskCreated',
          UPDATED: 'taskUpdated'
        }
      },
      SUBSCRIBE: {
        TASK_PROCESSOR: {
          TASK: {
            CREATED: 'taskCreated',
            UPDATED: 'taskUpdated',
            ERROR: 'taskError',
            COMPLETED: 'taskCompleted'
          }
        }
      }
    },
    LOGS: {
      CONNECTION_ATTEMPT: 'Attempting connection to mq',
      CONNECTION_FAILED: 'Connection Failed',
      CONNECTION_ERROR: 'Connection error',
      CONNECTION_CLOSED: 'Connection closed',
      CONNECTION_BLOCKED: 'Connection blocked',
      CONNECTION_SUCCESS: 'Connection created...',
      CHANNEL_CREATED: 'Channel created',
      CHANNEL_ATTEMPT: 'Attempting to create channel',
      CHANNEL_ERROR: 'Channel error',
      CHANNEL_CLOSED: 'Channel closed',
      CHANNEL_DRAINED: 'Channel drained',
      CHANNEL_RETURN: 'Channel return',
      EVENT_SENT: 'Event published',
      EVENT_ATTEMPT: 'Attempting to send event',
      EVENT_PROCESSUNG: 'Processing event:',
      NO_EVENT_SUB: 'No subscription for event found',
      HANDLING_CREATE_TASK: 'Handling create task'
    },
    DEFAULT_TIMEOUT: 30000,
    DEFAULT_RETRY_COUNT: 10
  },
  ERRORS: {
    MQ: {
      CONNECTION_ERROR: 'Connection error',
      CONNECTION_NOT_DEFINED: 'Connection Object not defined',
      NULL_MESSAGE: 'Null message received',
      BROKER_ERROR: 'Broker error',
      SUBSCRIBER_ERROR: 'Subscriber error'
    }
  }
}

export default CONSTS
