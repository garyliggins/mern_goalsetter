//this is where we define our schema, the schema is the fields that the goals will have that will be connected to the database passing information

const mongoose = require('mongoose') //connecting to mongoose/mongoDB    

//defining your schema fields, a text field, that is required and it will send a error message if there is not text in that field, and this will also add timestamps in the database, created at and updated at
const goalSchema = mongoose.Schema({
// adding the user object ID because each goal will have a user associated 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Goal', goalSchema)