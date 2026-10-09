import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    username:{
    type: String,
    required: true,
    minlength: 4,
    match: /^[a-zA-Z0-9_]+$/,
    unique: true 

    },
    name: String,
    //install the bcrypt package for generating the password hashes:
    passwordHash: String,
    followersCount: {
        type: Number,
        default: 0
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    followingCount: {
        type: Number,
        default: 0
    },
    lastSeen: {
        type: Date,
        default: null,

    },
 posts:[
    {
      type: mongoose.Schema.Types.ObjectId, //ObjectId, meaning it refers to another document by id.
      ref: 'Post' //specifies the name of the model being referenced.
    }

  ]
})
userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash
  }
})


const User = mongoose.model('User', userSchema)

export default User