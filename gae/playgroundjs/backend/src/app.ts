import 'dotenv/config'
import Youch from 'youch'

import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express'
import cors from 'cors'
import { resolve } from 'path'
import 'express-async-errors'

import './config/datastore'
import routes from './routes'

class App {
  public server : express.Application

  public constructor () {
    this.server = express()

    this.middlewares()
    this.routes()
    this.exceptionHandler()
  }

  private middlewares () : void{
    this.server.use(express.json())
    this.server.use(cors())
  }

  private routes () : void{
    this.server.use('/api/', routes)
    this.server.get('/*', (req:Request, res:Response) => {
      return res.sendFile(resolve(__dirname, '..', '..', 'build', 'web', 'index.html'))
    })
  }

  private exceptionHandler () : void {
    this.server.use(async (err: ErrorRequestHandler, req:Request, res:Response, next:NextFunction) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON()

        return res.status(500).json(errors)
      }

      return res.status(500).json({ error: 'Internal server error' })
    })
  }
}

export default new App().server
