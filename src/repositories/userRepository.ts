import conn from '../config/conn'

class UserRepository {
  static async createUser(user: {
    name: string
    email: string
    password: string
    active: number
  }) {
    const query = `INSERT INTO users (name, email, password, active) VALUES (?, ?, ?, ?)`

    try {
      const connectionComplete = await conn()
      const result = connectionComplete.query(query, [
        user.name,
        user.email,
        user.password,
        user.active
      ])
      return result
    } catch (error) {
      throw new Error(`err`)
    }
  }
}

export default UserRepository
