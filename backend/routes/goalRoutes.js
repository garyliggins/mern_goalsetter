const express = require('express')
const router = express.Router()
//these two lines are how you import the express router

const {getGoals, setGoals, updateGoals, deleteGoals} = require('../controllers/goalControllers')
//this is bringing in the routing logic function from the controller file

const {protect} = require('../middleware/authMiddleware')

router.get('/', protect, getGoals)


router.post('/',protect,setGoals)

router.put('/:id', protect, updateGoals)


router.delete('/:id', protect, deleteGoals)


module.exports = router
//exporting the router to be used in other files