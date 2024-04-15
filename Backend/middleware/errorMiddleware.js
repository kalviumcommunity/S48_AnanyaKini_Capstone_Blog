// Middleware for handling 404 errors
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

// Middleware for handling errors
const errorHandler = (error, req, res, next) => {
    if (res.headersSent) {
        return next(error);
    }
    res.status(error.status || 500);
    res.json({
        message: error.message || "An unknown error occurred"
    });
};

module.exports = {
    notFound,
    errorHandler
};
