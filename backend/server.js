const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5001 // this is the port the server will run on

const app = express() //this is initializing express into a variable called app

// app.get('/api/goals', (req,res) => {
//     res.send('Goals')
// }) //this is a get request if you go to the route localhost:5001/api/goals in a browser or postman it will run the second argument which is a function, that function will send the word "goals"

//normal you would pass in Json object instead of a string this is a example of that

//setting the status gives you the option of what exactly you want to display if your response sends ok

app.use('/api/goals', require('./routes/goalRoutes'))
//this is telling express in order to use this route '/api/goals' go to this file './routes/goalRoutes' where the route lives now

app.listen(port, () => console.log(`Server started on port ${port}`)) //the express server is listening for the server to start and it will run this consolelog


//to start server npm run server