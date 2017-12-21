const { userRepository } = require('../repositories');

module.exports = {
    async signup(ctx) {
        const { name, email, password } = ctx.request.body;
        const user = await userRepository.createUser({ name, email, password });

        ctx.body = { user };
    },
};
