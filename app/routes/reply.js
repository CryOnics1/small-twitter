const replyController = require('../controllers/replyController');
const { isAuthenticated } = require('../middlewares');

module.exports = (router) => {
    router.get('/api/post/:id/replies', isAuthenticated, replyController.getRepliesByPost);
    router.post('/api/post/:id/reply', isAuthenticated, replyController.createReply);
    router.delete('/api/reply/:id', isAuthenticated, replyController.deleteReply);
};
