import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import routes from './routes/userRouter'
import conn from './config/conn'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

try {
  conn()
} catch (error) {
  console.log(error)
}

app.listen(process.env.DB_PORT, () => {
  console.log('Server started on port 3333!')
})
