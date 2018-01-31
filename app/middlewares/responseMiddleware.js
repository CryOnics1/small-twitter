module.exports = async (ctx, next) => {
    await next();
    if (ctx.status > 399) {
        if (ctx.body.errors) {
            ctx.body = {
                data: ctx.body.errors.name,
                errors: ctx.body.errors.data,
            };
        }
        return;
    }

    if (ctx.body && !ctx.state.ignoreBody) {
        ctx.body = { data: ctx.body };
    }
};
