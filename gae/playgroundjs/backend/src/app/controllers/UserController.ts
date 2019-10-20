import User from '../models/userSchema'
import { Request, Response } from 'express'
class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    try {
      const pageCursor = req.query.cursor

      const users = await User.list({ start: pageCursor })

      return res.json(users)
    } catch (err) {
      return res.status(400).json(err)
    }
  }

  public async show (req: Request, res: Response): Promise<Response> {
    try {
      const userId = req.params.id
      const entity = await User.get(userId)
      return res.json(entity.plain())
    } catch (err) {
      return res.status(400).json(err)
    }
  }

  public async store (req: Request, res: Response): Promise<Response> {
    try {
      const entityData = User.sanitize(req.body)
      const user = new User(entityData)

      const checkEmail = await User.findOne({ email: user.email })
      if (checkEmail) {
        return res.status(403).json({ error: 'email already taken' })
      }

      const entity = await user.save()
      return res.json(entity.plain())
    } catch (err) {
      return res.status(400).json(err)
    }
  }

  public async cleanup (req: Request, res: Response): Promise<Response> {
    const response = await User.deleteAll()
    return res.json(response)
  }
}

export default new UserController()
