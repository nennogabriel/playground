import express, { Request, Response } from 'express'
import cors from 'cors'
import { resolve } from 'path'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private routes (): void {
    this.express.get('/api', (req:Request, res:Response) => {
      return res.json({ hello: 'world' })
    })
    this.express.get('/*', (req:Request, res:Response) => {
      return res.sendFile(resolve(__dirname, '..', '..', 'build', 'web', 'index.html'))
    })
  }
}

export default new App().express
