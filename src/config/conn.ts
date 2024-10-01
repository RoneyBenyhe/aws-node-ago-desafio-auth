import { createConnection } from 'mysql2/promise'

async function conect() {
  try {
    const conn = await createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    })

    console.log('Conectado ao banco de dados MySQL!')
    return conn
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error)
    throw error
  }
}

export default conect
