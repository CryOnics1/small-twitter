const replyController = require('../controllers/replyController');
const { isAuthenticated } = require('../middlewares');

module.exports = (router) => {
    router.post('/api/reply/:id', isAuthenticated, replyController.createReply);
};
