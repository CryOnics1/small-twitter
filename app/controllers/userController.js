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
        const { name: userName } = ctx.params;
        const user = await userRepository.findByName(userName);
        if (!user) {
            throw new NotFoundException(errorMessages.userNotFound);
        }

        ctx.body = userFormatter.get(user);
    },

    async getUserPost(ctx) {
        const { name: userName } = ctx.params;
        const user = await userRepository.findByName(userName);
        if (!user) {
            throw new NotFoundException(errorMessages.userNotFound);
        }

        const posts = await postRepository.findPostsByUserId(user._id);

        ctx.body = postFormatter.list(posts);
    },
};
