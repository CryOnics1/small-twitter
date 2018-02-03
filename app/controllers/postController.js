const { postRepository } = require('../repositories');

module.exports = {
    async createPosts(ctx) {
        const { text } = ctx.request.body;
        const { id: userId } = ctx.user;
        const posts = await postRepository.createPost(userId, text);
        ctx.body = posts;
    },

    async posts(ctx) {
        const { id } = ctx.user;
        const posts = await postRepository.findPostsByUserId(id);
        ctx.body = posts;
    },
};
