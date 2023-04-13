const express = require('express')
const router = express.Router()
//these two lines are how you import the express router

router.get('/', (req,res) => {
    res.status(200).json({message: "get goals"})
})
//moved this from the server.js file, changed app  -> router because the variable is now router to use the express router, and changed the route to a home single slash '/' becuase the full route is still in the server.js file that is pointing to this file

router.post('/', (req,res) => {
    res.status(200).json({message: "post goals"})
})

router.put('/:id', (req,res) => {
    res.status(200).json({message: `updated goals ${req.params.id}`})
})
//the put request (update) will always need some kind of ID because it will be updating a specfic item, this is how you access which item you updated ${req.params.id}

router.delete('/:id', (req,res) => {
    res.status(200).json({message: `deleted goals ${req.params.id}`})
})
//the delete request will always need some kind of ID because it will be deleting a specfic item, this is how you access which item you deleted ${req.params.id}

module.exports = router
//exporting the router to be used in other files