const userController = require('../controllers/userController');
const { isAuthenticated } = require('../middlewares');

module.exports = (router) => {
    router.get('/api/profile', isAuthenticated, userController.profile);
    router.get('/api/user/:id/profile', isAuthenticated, userController.getProfile);
    router.get('/api/user/:id/posts', isAuthenticated, userController.getUserPost);
};
