const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5001 // this is the port the server will run on

const app = express() //this is initializing express into a variable called app

app.listen(port, () => console.log(`Server started on port ${port}`)) //the express server is listening for the server to start and it will run this consolelog


