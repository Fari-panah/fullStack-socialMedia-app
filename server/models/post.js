import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: String,
    content: String,
    creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
    tags: [String],
    mediaUrl: String,
    mediaType: {
      type: String,
      enum: ['image', 'video']
  },
    likeCount: {
      type: Number,
      default: 0

    },
    createdAt: {
      type: Date,
      default: new Date()
    }

})

postSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


const Post = mongoose.model('Post', postSchema)

export default Post