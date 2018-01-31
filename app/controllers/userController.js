module.exports = {
    async me(ctx) {
        ctx.body = { user: ctx.state.user };
    },
};
