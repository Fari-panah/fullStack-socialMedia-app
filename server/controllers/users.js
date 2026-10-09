import User from '../models/user.js'
import bcrypt from 'bcrypt'

export const createUser = async(req, res) => {
    try {
        const { username, name, password } = req.body
        if(!username || !password || !email) 
            return res.status(400).json({'message': 'username, email and password are required!'})
        if (password.length < 8) {
            return res.status(400).json({
            error: 'password must be at least 8 characters'
        })
        }
        const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

        if (!strongPassword.test(password)) {
            return res.status(400).json({
            error:
            'password must contain uppercase, lowercase and a number'
            })}

        if (username.includes(' ')) {
            return res.status(400).json({
            error: 'username cannot contain spaces'
            })
        }

            const saltRounds = 10
            const passwordHash = await bcrypt.hash(password, saltRounds)
            
            const user = new User({
                username,
                name,
                passwordHash,
            })

            const savedUser = await user.save()

            res.status(201).json(savedUser)
        
    } catch (error) {
        console.error(error)
        res.status(500).json({
        message: 'Failed to create user'})
    
    }

}
export const searchUsers = async (req, res) => {
    const users = await User.find({})
    res.json(users)
}

