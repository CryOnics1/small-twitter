const userController = require('../controllers/userController');

module.exports = (router) => {
    router.get('/me', userController.me);
};
