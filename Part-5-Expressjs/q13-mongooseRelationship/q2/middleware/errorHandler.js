// Error-handling middleware for express
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    // Determine the status code, default to 500
    const statusCode = err.status || 500;
  
    // Send a standardized error response
    res.status(statusCode).json({
      message: err.message || 'Internal Server Error',
      stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
    });
  };
  
  module.exports = errorHandler;
  