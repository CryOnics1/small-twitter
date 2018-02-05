const Joi = require('joi');

module.exports = {
    login() {
        return {
            body: Joi.object().keys({
                email: Joi.string().required(),
                password: Joi.string().required()
            })
        };
    },
    signup() {
        return {
            body: Joi.object().keys({
                name: Joi.string().required(),
                email: Joi.string().required(),
                password: Joi.string().required(),
            })
        };
    },
};
