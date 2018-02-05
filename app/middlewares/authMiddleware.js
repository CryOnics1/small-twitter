const { UnauthorizedException } = require('../exceptions');
const errorMessages = require('../../config/errorMessages');
const jwt = require('jsonwebtoken');
const config = require('../../config');

const auth = async (ctx, next) => {
    if (!ctx.headers && !ctx.headers.authorization) {
        throw new UnauthorizedException(errorMessages.tokenRequired);
    }

    const result = await jwt.verify(ctx.headers.authorization, config.jwt.secretKey, (err, decoded) => {
        if (err) {
            throw new UnauthorizedException(errorMessages.tokenInvalid);
        }

        return decoded;
    });
    ctx.user = result.data;

    await next();
};

module.exports = auth;
