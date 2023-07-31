/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express'
import CONSTS from '../../config/constants'
import { BrokerAsPromised } from 'rascal'

import csv from 'csv-parser'
import through2 from 'through2'

const processFile = async (req: Request, res: Response, _next: NextFunction) => {
  try {
    const stream = req
      .pipe(csv())
      .pipe(
        through2({ objectMode: true }, (row, enc, cb) => {
          // - `row` holds the first row of the CSV,
          //   as: `{ Year: '1997', Make: 'Ford', Model: 'E350' }`
          // - The stream won't process the *next* item unless you call the callback
          //  `cb` on it.
          // - This allows us to save the row in our database/microservice and when
          //   we're done, we call `cb()` to move on to the *next* row.
          console.log(row)
          cb(null, true)
        })
      )
      .on('data', (data: any) => {
        console.log('saved a row')
      })
      .on('end', () => {
        console.log('end')
      })
      .on('error', (err: any) => {
        console.error(err)
      })
    const rabbit: BrokerAsPromised = req.app.get('rabbit')
    const response = { message: 'success', status: 200 }
    res.json(response).status(200)
  } catch (error) {
    const response = { message: `${error}`, status: CONSTS.HTTP.CODES.INTERNAL_SERVER_ERROR }
    res.json(response).status(500)
  }
}

export { processFile }
