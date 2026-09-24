import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: String,
    mesesage: String,
    creator: String,
    tags: [String],
    imageurl: String,
    likeCount: {
        type: Number,
        default: 0

    },
    createdAt: {
        type: Date,
        default: new Date()
    }

})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage