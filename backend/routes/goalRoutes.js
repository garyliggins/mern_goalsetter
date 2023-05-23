const express = require('express')
const router = express.Router()
//these two lines are how you import the express router

const {getGoals, setGoals, updateGoals, deleteGoals} = require('../controllers/goalControllers')
//this is bringing in the routing logic function from the controller file

router.get('/', getGoals)


router.post('/',setGoals)

router.put('/:id', updateGoals)


router.delete('/:id',deleteGoals)


module.exports = router
//exporting the router to be used in other files