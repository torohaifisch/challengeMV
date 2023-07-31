import winston from 'winston'
import Env from '../config/environment'

const env = Env()

const logger = winston.createLogger({
  level: env.logger.level || 'info',
  format: winston.format.combine(winston.format.json()),
  transports: [new winston.transports.Console()]
})

export default logger
