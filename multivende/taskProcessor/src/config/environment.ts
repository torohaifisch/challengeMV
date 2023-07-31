import dotenv from 'dotenv'
import environmentSchema from './environment.schema'

import Validator from 'fastest-validator'

const v = new Validator()

const check = v.compile(environmentSchema)

export default () => {
  dotenv.config()
  const env = {
    mode: process.env.SERVICE_MODE || 'api',
    api: {
      port: process.env.DEFAULT_APP_PORT,
      env: process.env.API_ENV
    },
    logger: {
      level: process.env.LOGGER_LEVEL
    },
    mq: {
      username: process.env.MQ_USER,
      password: process.env.MQ_PASSWORD,
      hostname: process.env.MQ_HOSTNAME,
      port: process.env.MQ_PORT,
      vhost: process.env.MQ_VHOST,
      protocol: process.env.MQ_PROTOCOL
    }
  }

  const result = check(env)

  if (result === true) {
    return env
  } else {
    throw new Error(JSON.stringify(result))
  }
}
