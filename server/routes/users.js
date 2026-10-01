import { Router } from 'express'
import { createUser, searchUsers } from '../controllers/users.js'

const usersRouter = Router();

usersRouter.post('/', createUser)
usersRouter.get('/', searchUsers)

export default usersRouter