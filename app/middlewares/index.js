const isAuthenticated = require('./authMiddleware');
const responseMiddleware = require('./responseMiddleware');

module.exports = {
    isAuthenticated,
    responseMiddleware,
};
