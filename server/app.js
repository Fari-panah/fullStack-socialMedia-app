import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { error, info } from './utils/logger.js'
import { MONGODB_URI  } from './utils/config.js'
import postRoutes from './routes/posts.js'
import usersRouter from './routes/users.js'

const app = express()

mongoose
.connect(MONGODB_URI)
.then(() => { info('connected to MongoDB')})
.catch((err) => { error('error connection to MongoDB:', err.message)})



app.use(express.json())
app.use(cors())
app.use('/posts', postRoutes)
app.use('/api/users', usersRouter )

export default app


