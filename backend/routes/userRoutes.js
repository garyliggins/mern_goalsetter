const express = require('express')
const router = express.Router()
//these two lines are how you import the express router

//bringing in the logic from the controller
const {registerUser, getMe, loginUser} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect,getMe)

module.exports = router
