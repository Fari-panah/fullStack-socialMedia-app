import User from '../models/user.js'
import bcrypt from 'bcrypt'

export const createUser = async(req, res) => {
    const { username, name, password } = req.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)
    
    const user = new User({
        username,
        name,
        passwordHash,
    })

    const savedUser = await user.save()

    res.status(201).json(savedUser)
}
export const searchUsers = async (req, res) => {
    const users = await User.find({})
    res.json(users)
}

