module.exports = async (ctx, next) => {
    await next();
    if (ctx.status > 399) {
        return;
    }

    if (ctx.body && !ctx.state.ignoreBody) {
        ctx.body = { data: ctx.body };
    }
};
