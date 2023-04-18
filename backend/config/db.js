const mongoose = require('mongoose');

//code that connects to the mongodb database
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongoDB connected: ${conn.connection.host}`.cyan.underline) //cyan is the colors package
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports=connectDB