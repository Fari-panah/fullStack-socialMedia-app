import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()

mongoose
.connect(config.MONGODB_URI)
.then(() => { logger.info('connected to MongoDB')})
.catch((error) => { logger.error('error connection to MongoDB:', error.message)})



app.use(express.json())
app.use(cors())


