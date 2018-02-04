const postController = require('../controllers/postController');
const { isAuthenticated } = require('../middlewares');

module.exports = (router) => {
    router.get('/api/posts', isAuthenticated, postController.getPosts);
    router.get('/api/post/:id', isAuthenticated, postController.getPostById);
    router.post('/api/post', isAuthenticated, postController.createPosts);
};
