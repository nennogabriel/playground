import { Router } from 'express'
import UserController from './app/controllers/UserController'

const routes: Router = new Router()

routes.get('/users/', UserController.index)
routes.get('/users/:id/', UserController.show)
routes.post('/users/', UserController.store)

routes.get('/VerySimpleRouteTeste', (req, res) => res.json({ ok: true }))

routes.get('/*', (req, res) => res.status(404).json({ error: 'route not found' }))

export default routes
