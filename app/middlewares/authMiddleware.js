const UserRepository = require('../repositories/userRepository');
const jsonwebtoken = require('jsonwebtoken');
const config = require('../../config');

const auth = async (ctx, next) => {
    // if (ctx.headers && ctx.headers.authorization) {
    //     try {
    //         const result = await jsonwebtoken.verify(ctx.headers.authorization, config.jwt.secretKey);
    //         if (result && result.email) {
    //             ctx.state.user = result;
    //         }
    //     } catch (err) {
    //         ctx.status = 401;
    //         ctx.body = { err };
    //     }

    //     await next();
    // }
};

module.exports = auth;