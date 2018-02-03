const postController = require('../controllers/postController');
const { isAuthenticated } = require('../middlewares');

module.exports = (router) => {
    router.get('/api/posts', isAuthenticated, postController.posts);
    router.post('/api/post', isAuthenticated, postController.createPosts);
};
