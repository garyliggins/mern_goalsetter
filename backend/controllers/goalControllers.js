const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')


//desc get goals
//route GET /api/goals
//access private
const getGoals =asyncHandler( async (req, res) => {
    const goals = await Goal.find()
    
    res.status(200).json(goals)
})
//this function is abstracting the logic from the goal route and putting it into a function. whne we go back to the goalRoutes file, instead of writing the logic for the callback function we would just use the function name

//desc post/create goals
//route POST /api/goals
//access private
const setGoals = asyncHandler( async (req,res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error("please use the text field")
    }

    const goal = await Goal.create({
        text: req.body.text,
    })
    res.status(200).json(goal)
})

//desc put/edit 
//route PUT /api/goals/:id
//access private
const updateGoals = asyncHandler( async (req,res) => {
    
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
    })
    
    res.status(200).json(updatedGoal)


})

//desc delete 
//route DELETE /api/goals/:id
//access private
const deleteGoals = asyncHandler( async (req,res) => {

    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    
    await goal.deleteOne()

    res.status(200).json({id:req.params.id})
})


module.exports ={ getGoals,setGoals, updateGoals, deleteGoals }