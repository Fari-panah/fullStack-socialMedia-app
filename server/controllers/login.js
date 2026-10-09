import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../models/user.js'

const login = async (req, res) => {
    const { username, password } = req.body
    try {
         const user = await User.findOne({ username })
        const passwordCorrect = user === null
        ? false
        : await bcrypt.compare(password, user.passwordHash)

        if(!(user && passwordCorrect)) {
            return res.status(401).json({
        error: 'invalid username or password'
        })
        }
        //the server generates a token that somehow identifies the logged-in user
        //The browser saves the token
        //The server uses the token to identify the user
        const userForToken = {
        username: user.username,
        id: user._id,
    }
    // token expires in 60*60 seconds, that is, in one hour
        const token = jwt.sign(
            userForToken, 
            process.env.SECRET,
            { expiresIn: 60*60 }
        )
        res
            .status(200)
            .send({ token, username: user.username, name: user.name })
            
    } catch (error) {
        res.status(400).json({error: error.message })
        
    }


   
}
export default login
