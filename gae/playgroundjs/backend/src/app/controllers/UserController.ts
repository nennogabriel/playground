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
      const entity = User.get(userId)
      return res.json(entity.plain())
    } catch (err) {
      return res.status(400).json(err)
    }
  }

  public async store (req: Request, res: Response): Promise<Response> {
    try {
      const entityData = User.sanitize(req.body)
      const checkEmail = User.findOne({ email: req.body.email })
      if (checkEmail) {
        return res.status(403).json({ error: 'email already taken' })
      }
      const user = new User(entityData)

      const entity = await user.save()
      return res.json(entity.plain())
    } catch (err) {
      return res.status(400).json(err)
    }
  }
}

export default new UserController()
