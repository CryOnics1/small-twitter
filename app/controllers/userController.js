const { userRepository, postRepository } = require('../repositories');
const userFormatter = require('../formatters/userFormatter');
const postFormatter = require('../formatters/postFormatter');
const { NotFoundException } = require('../exceptions');
const errorMessages = require('../../config/errorMessages');

module.exports = {
    async profile(ctx) {
        ctx.body = ctx.user;
    },

    async getProfile(ctx) {
        const { id: userId } = ctx.params;
        const user = await userRepository.findById(userId);
        if (!user) {
            throw new NotFoundException(errorMessages.userNotFound);
        }

        ctx.body = userFormatter.get(user);
    },

    async getUserPost(ctx) {
        const { id: userId } = ctx.params;
        const user = await userRepository.findById(userId);
        if (!user) {
            throw new NotFoundException(errorMessages.userNotFound);
        }

        const posts = await postRepository.findPostsByUserId(userId);

        ctx.body = postFormatter.list(posts);
    },
};
