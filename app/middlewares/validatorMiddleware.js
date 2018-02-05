const _ = require('lodash');
const Joi = require('joi');

Joi.objectId = require('joi-objectid')(Joi);

module.exports = rules => async (ctx, next) => {
    const request = {};
    if (!(ctx.request.method === 'GET' || ctx.request.method === 'DELETE')) {
        request.body = ctx.request.body;
    }

    if (!_.isEmpty(ctx.params)) {
        request.params = ctx.params;
    }

    if (!_.isEmpty(ctx.query)) {
        request.query = ctx.query;
    }

    const result = Joi.validate(request, rules(), {
        abortEarly: false,
        stripUnknown: false
    });

    if (result.error) {
        const errorData = {};
        result.error.details.forEach((e) => {
            if (!errorData[e.context.label]) {
                errorData[e.context.label] = [];
            }
            errorData[e.context.label].push({
                type: e.type,
                message: e.message
            });
        });
        ctx.body = {
            error: result.error.name,
            invalid: errorData,
        };
        ctx.status = 400;
        return;
    }

    await next();
};
