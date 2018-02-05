const { replyRepository, postRepository } = require('../repositories');
const replyFormatter = require('../formatters/replyFormatter');
const { NotFoundException, PermissionDeniedException } = require('../exceptions');
const errorMessages = require('../../config/errorMessages');

module.exports = {
    async createReply(ctx) {
        const { id: postId } = ctx.params;
        const { text } = ctx.request.body;
        const { id: userId } = ctx.user;
        const post = await postRepository.findById(postId);
        if (!post) {
            throw new NotFoundException(errorMessages.postNotFound);
        }

        const reply = await replyRepository.createReply(userId, postId, text);

        ctx.body = replyFormatter.get(reply);
    },

    async getRepliesByPost(ctx) {
        const { id: postId } = ctx.params;
        const replies = await replyRepository.findByPost(postId);

        ctx.body = replyFormatter.list(replies);
    },

    async deleteReply(ctx) {
        const { id: replyId } = ctx.params;
        const { id: userId } = ctx.user;
        const reply = await replyRepository.findById(replyId);
        if (!reply) {
            throw new NotFoundException(errorMessages.replyNotFound);
        }

        if (reply.user.toString() !== userId.toString()) {
            throw new PermissionDeniedException(errorMessages.forbidden);
        }

        await reply.remove();
        ctx.status = 200;
    }
};
