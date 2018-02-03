// const { userRepository } = require('../repositories');
// const { NotFoundException } = require('../exceptions');
// const errorMessages = require('../../config/errorMessages');

module.exports = {
    async profile(ctx) {
        ctx.body = ctx.user;
    },
};
