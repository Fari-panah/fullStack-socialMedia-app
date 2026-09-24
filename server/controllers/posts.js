import Post from '../models/post.js'
//all handlers for posts routes:

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        
    } catch (error) {
        
    }
    
}
export const createPost = async(req, res) => {

}