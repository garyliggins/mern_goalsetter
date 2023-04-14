const asyncHandler = require('express-async-handler')

//desc get goals
//route GET /api/goals
//access private
const getGoals =asyncHandler( async (req, res) => {
    
    res.status(200).json({message: "get goals"})
})
//this function is abstracting the logic from the goal route and putting it into a function. whne we go back to the goalRoutes file, instead of writing the logic for the callback function we would just use the function name

//desc post/create goals
//route POST /api/goals
//access private
const postGoals = asyncHandler( async (req,res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error("please use the text field")
    }
    res.status(200).json({message: "post goals"})
})

//desc put/edit 
//route PUT /api/goals/:id
//access private
const editGoals = asyncHandler( async (req,res) => {
    res.status(200).json({message: `updated goals ${req.params.id}`})
})

//desc delete 
//route DELETE /api/goals/:id
//access private
const deleteGoals = asyncHandler( async (req,res) => {
    res.status(200).json({message: `deleted goals ${req.params.id}`})
})


module.exports ={ getGoals,postGoals, editGoals, deleteGoals }