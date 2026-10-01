import { Router } from 'express'
import { getAllPosts, getPostById, createPost } from '../controllers/posts.js'
const postRouter = Router();

postRouter.get('/', getAllPosts)
postRouter.post('/', createPost)
postRouter.get('/:id', getPostById)


export default postRouter