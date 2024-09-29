import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import routes from './routes'
import conn from './config/conn'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.DB_PORT, () => {
  console.log('Server started on port 3333!')
})

conn()
