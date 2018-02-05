const isAuthenticated = require('./authMiddleware');
const responseMiddleware = require('./responseMiddleware');
const errorHandlerMiddleware = require('./errorHandler');
const mongooseErrorMiddleware = require('./mongooseErrorMiddleware');

module.exports = {
    errorHandlerMiddleware,
    isAuthenticated,
    responseMiddleware,
    mongooseErrorMiddleware,
};
