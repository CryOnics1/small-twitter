const userController = require('../controllers/userController');
const { isAuthenticated } = require('../middlewares');

module.exports = (router) => {
    router.get('/api/profile', isAuthenticated, userController.profile);
};
