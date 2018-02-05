const { Post } = require('../models');

module.exports = {
    async createPost(userId, text) {
        const post = new Post({ user: userId, text });
        return post.save();
    },

    async findById(id) {
        return Post.findById(id);
    },

    async findPostsByUserId(userId) {
        return Post.find({ user: userId }).sort({ createdAt: -1 });
    },

    /**
     * @param {String} id - postId
     */
    async deleteById(id) {
        return Post.findByIdAndRemove(id);
    }
};
