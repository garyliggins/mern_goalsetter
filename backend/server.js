const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware') //importing the middleware to use
const port = process.env.PORT || 5001 // this is the port the server will run on

const app = express() //this is initializing express into a variable called app

app.use(express.json())
app.use(express.urlencoded({extended: false}))
//these two lines let you get body data from the request object



//routes
app.use('/api/goals', require('./routes/goalRoutes'))
//this is telling express in order to use this route '/api/goals' go to this file './routes/goalRoutes' where the route lives now
app.use(errorHandler) //this is also required to use the error handler


app.listen(port, () => console.log(`Server started on port ${port}`)) //the express server is listening for the server to start and it will run this consolelog


//to start server npm run server