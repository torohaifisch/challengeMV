import express, { Express, Request, Response } from 'express'
import bodyParser from 'body-parser'
import mqSetup from './mq/'
import prisma from './helpers/prisma'
import logger from './helpers/logger'
import environment from './config/environment'
const app: Express = express()

const env = environment()

async function start() {
  await mqSetup(prisma, logger)

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello World!' })
  })

  app.listen(env.api.port, async () => {
    console.log(`Server is running at http://localhost:${env.api.port}`)
  })
}

try {
  start()
} catch (error) {
  console.log(error)
}
