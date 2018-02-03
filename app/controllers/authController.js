const { userRepository } = require('../repositories');
const { NotFoundException } = require('../exceptions');
const errorMessages = require('../../config/errorMessages');
const { generateToken } = require('../utils');

module.exports = {
    async signup(ctx) {
        const { name, email, password } = ctx.request.body;
        const user = await userRepository.createUser({ name, email, password });
        const token = await generateToken({ id: user._id, email: user.email, name: user.name });
        ctx.body = { token };
    },

    async login(ctx) {
        const { email, password } = ctx.request.body;
        const user = await userRepository.findByEmail(email);

        if (!user || !user.password || !await user.comparePassword(password)) {
            throw new NotFoundException(errorMessages.invalidPassword);
        }

        const token = await generateToken({ id: user._id, email: user.email, name: user.name });
        ctx.body = { token };
    },
};
