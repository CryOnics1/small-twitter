const { Reply } = require('../models');

module.exports = {

    /**
     * @param {String} user - userId
     * @param {String} post - postId
     * @param {String} text
     */
    async createReply(user, post, text) {
        const reply = new Reply({ user, post, text });
        return reply.save();
    },

    /**
     * @param {String} post - postId
     */
    async getCountForPost(post) {
        return Reply.count({ post });
    },

    /**
     * @param {String} post - postId
     */
    async findByPost(post) {
        return Reply.find({ post });
    },
};
