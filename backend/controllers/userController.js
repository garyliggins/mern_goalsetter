
//desc create/register a user
//route POST /api/users
//access public
const registerUser = (req,res) => {
    res.json({message: 'Register User'})
}


//desc authenticate a user
//route POST /api/users
//access public
const loginUser = (req,res) => {
    res.json({message: 'login User'})
}


//desc get logged in user data
//route GET /api/user/me
//access public
const getMe = (req,res) => {
    res.json({message: 'display logged in user'})
}

module.exports = {
    registerUser,loginUser, getMe
}
