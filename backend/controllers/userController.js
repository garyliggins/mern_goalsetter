const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')



//desc create/register a user
//route POST /api/users
//access public
const registerUser = asyncHandler( async (req,res) => {
    const {name, email, password} = req.body

    //if all fields are not filled out send back error
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    //check if user exists, if so throw error
    const userExists = await User.findOne({email})

    if (userExists) {
        res.status(400)
        throw new Error('user already exists')
    }

    //hash password using bcrypt
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //create user
    const user = await User.create({
        name, 
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('invalid user data')
    }
})


//desc authenticate a user
//route POST /api/users
//access public
const loginUser = asyncHandler( async (req,res) => {

const {email, password} = req.body //getting the email and password from the req.body

//check for user email
const user = await User.findOne({email})

//if the password entered matches the hashed password
if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
        _id:user.id,
        name:user.name,
        email: user.email,
        token: generateToken(user._id)
    })
} else {
    res.status(400)
    throw new Error('invalid credentials')
}
})


//desc get logged in user data
//route GET /api/user/me
//access private
const getMe = asyncHandler(async (req,res) => {
    res.status(200).json(req.user)
})

//generate JWT token
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '90d',
    })
}



module.exports = {
    registerUser,loginUser, getMe
}
