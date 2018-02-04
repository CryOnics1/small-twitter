const validator = require('../middlewares/validatorMiddleware');
const postValidatorRules = require('../validators/postValidator');
const postController = require('../controllers/postController');
const { isAuthenticated } = require('../middlewares');

module.exports = (router) => {
    router.get('/api/posts', isAuthenticated, postController.getPosts);
    router.get('/api/post/:id', isAuthenticated, postController.getPostById);
    router.post('/api/post', isAuthenticated, validator(postValidatorRules.createPost), postController.createPost);
    router.delete('/api/post', isAuthenticated, validator(postValidatorRules.deletePost), postController.deletePost);
};
