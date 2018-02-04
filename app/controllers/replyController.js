const { replyRepository } = require('../repositories');
// const { BadRequestException } = require('../exceptions');
// const errorMessages = require('../../config/errorMessages');

module.exports = {
    async createReply(ctx) {
        const { id: postId } = ctx.params;
        const { text } = ctx.request.body;
        const { id: userId } = ctx.user;
        const reply = await replyRepository.createReply(userId, postId, text);

        ctx.body = reply;
    },
};
