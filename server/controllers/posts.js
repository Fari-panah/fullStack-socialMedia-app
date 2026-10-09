import Post from '../models/post.js'
import User from '../models/user.js'
import jwt from 'jsonwebtoken'
//all handlers for posts routes:

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find({}).populate('creator', { username: 1, name: 1 })

    res.status(200).json(posts)
        
    } catch (error) {
        res.status(404).json({message: "Failed to get posts"})
        
    }
    
}
export const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(post){
            return res.status(200).json(post)
        }
        
    } catch (error) {
        return res.status(500).json({ message: "Server error" })
        
    }
    
}
const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.startsWith('Bearer ')) {
    return authorization.replace('Bearer ', '')
  }
  return null
}
export const createPost = async(req, res) => {
    try {
        const { title, content, tags, mediaUrl, mediaType }= req.body
        const decodedToken = jwt.verify(getTokenFrom(req), process.env.SECRET)
        if (!decodedToken.id) {
            return res.status(401).json({ error: 'token invalid' })
        }
        const user = await User.findById(decodedToken.id)

        if (!user) {
            return res.status(400).json({ error: 'UserId missing or not valid' })

        }

        const post = new Post({
            title,
            content,
            creator: user._id,
            tags,
            mediaUrl,
            mediaType
        })
        const savedPost = await post.save()

        user.posts = user.posts.concat(savedPost._id)
        await user.save()

        res.status(201).json(savedPost)
        
    } catch (error) {
        res.status(500).json({message: 'Failed to create post'})
        
    }
}
export const deletePost = async (req, res) => {

}
export const updatePost = async (req, res) => {
    try {
         const post = await Post.findById(req.params.id)
         
        
    } catch (error) {
        
    }
    
}