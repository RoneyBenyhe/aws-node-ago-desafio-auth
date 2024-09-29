import { Router, Request, Response } from 'express'

const routes = Router()

routes.get('/', (_: Request, response: Response): any => {
  return response.json({ message: 'TESTE' })
})

export default routes
