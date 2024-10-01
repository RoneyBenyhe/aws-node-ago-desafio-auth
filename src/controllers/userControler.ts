import express, { Request, Response } from 'express'
import UserRepository from '../repositories/userRepository'

class UserController {
  getUser(req: Request, res: Response) {
    res.send('Teste')
  }

  async createUser(req: Request, res: Response) {
    const user: any = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      active: 1
    }

    try {
      const result = UserRepository.createUser(user)
      res.status(201).json({ message: 'usuário criado', data: result })
    } catch (error) {
      throw new Error('error')
    }
  }
}

export default UserController
