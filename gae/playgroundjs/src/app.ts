import express from 'express'
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
    this.express.get('/api', (req, res) => {
      return res.json({ hello: 'world' })
    })
    this.express.get('/*', (req, res) => {
      return res.sendFile(resolve(__dirname, '..', 'frontend', 'build', 'index.html'))
    })
  }
}

export default new App().express
