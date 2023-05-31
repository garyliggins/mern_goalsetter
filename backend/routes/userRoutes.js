const express = require('express')
const router = express.Router()
//these two lines are how you import the express router

//bringing in the logic from the controller
const {registerUser, getMe, loginUser} = require('../controllers/userController')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getMe)

module.exports = router
