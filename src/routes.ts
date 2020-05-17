import { Router } from 'express'
import UserController from './controllers/user'

const routes = Router()

routes.get('/users', UserController.user)

export default routes
