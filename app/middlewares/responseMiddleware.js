module.exports = async (ctx, next) => {
    await next();

    if (ctx.status > 399) {
        return;
    }

    if (ctx.body) {
        ctx.body = {
            code: ctx.status,
            data: ctx.body,
        };
    }
};
