//this file creates and overwrites the error messages built into express

const errorHandler = (err, req, res, next) => {
   const statusCode = res.statusCode ? res.statusCode : 500 //if there is a status code display it, if not display 500

    res.status(statusCode)

    res.json({
        messsage: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    }) //so the stack trace if we are not in production, if we are in production show nothing
}

module.exports = {
    errorHandler
}