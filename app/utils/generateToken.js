const jwt = require('jsonwebtoken');
const { jwt: jwtConfig } = require('../../config');

module.exports = async params =>
    new Promise((resolve, reject) => {
        jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: params,
        }, jwtConfig.secretKey, (err, token) => (err ? reject(err) : resolve(token)));
    });
