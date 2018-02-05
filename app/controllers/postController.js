const { postRepository, replyRepository } = require('../repositories');
const postFormatter = require('../formatters/postFormatter');
const { PermissionDeniedException, NotFoundException } = require('../exceptions');
const errorMessages = require('../../config/errorMessages');

module.exports = {
    async createPost(ctx) {
        const { text } = ctx.request.body;
        const { id: userId } = ctx.user;
        const posts = await postRepository.createPost(userId, text);

        ctx.body = postFormatter.get(posts);
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

    async deletePost(ctx) {
        const { id: userId } = ctx.user;
        const { id: postId } = ctx.params;
        const post = await postRepository.findById(postId);
        if (!post) {
            throw new NotFoundException(errorMessages.postNotFound);
        }

        if (post.user.toString() !== userId.toString()) {
            throw new PermissionDeniedException(errorMessages.forbidden);
        }

        await post.remove();
        ctx.status = 200;
    }
};
