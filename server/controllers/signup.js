const signup = async(req, res) => {
    const {username, email, password} = req.body
    if (!username || !email || !password){
        return res.status(400).json({'message': 'all fields are required.'})
    }
    

}

export default signup