import { Router } from 'express'
import { createUser } from '../controllers/users.js'

const usersRouter = Router();

usersRouter.get('/', createUser)

export default usersRouter