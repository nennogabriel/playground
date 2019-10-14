import { Request, Response } from 'express'
import { Datastore } from '@google-cloud/datastore'

const datastore = new Datastore()

const getUsers = () => {
  const query = datastore
    .createQuery('User')
    .order('timestamp', { descending: true })
    .limit(10)
  return datastore.runQuery(query)
}

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await getUsers()
    return res.json(users)
  }
}

export default new UserController()
