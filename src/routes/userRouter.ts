import { Router, Request, Response } from 'express'

const routes = Router()

import UserController from '../controllers/userControler'

const userController = new UserController()

routes.get('/api/v1/users', userController.getUser)
routes.post('/api/v1/users', userController.createUser)

export default routes
