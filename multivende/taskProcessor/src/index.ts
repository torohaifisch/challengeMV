import express, { Express, Request, Response } from 'express'
import bodyParser from 'body-parser'
import mqSetup from './mq'
import prisma from './helpers/prisma'
import logger from './helpers/logger'

const app: Express = express()

async function start() {
  const broker = await mqSetup(prisma, logger)
  app.set('rabbit', broker)
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello World!' })
  })

  app.listen(8000, async () => {
    console.log('Server is running at http://localhost:8080')
  })
}

try {
  start()
} catch (error) {
  console.log(error)
}
