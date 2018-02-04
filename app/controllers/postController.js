const { postRepository, replyRepository } = require('../repositories');
const postFormatter = require('../formatters/postFormatter');

module.exports = {
    async createPost(ctx) {
        const { text } = ctx.request.body;
        const { id: userId } = ctx.user;
        const posts = await postRepository.createPost(userId, text);

        ctx.body = posts;
    },

    async getPosts(ctx) {
        const { id } = ctx.user;
        const posts = await postRepository.findPostsByUserId(id);

        ctx.body = postFormatter.list(posts);
    },

    async getPostById(ctx) {
        const { id: postId } = ctx.params;
        const post = await postRepository.findById(postId);
        post.replies = await replyRepository.findByPost(postId);

        ctx.body = postFormatter.getWithReply(post);
    },
};
