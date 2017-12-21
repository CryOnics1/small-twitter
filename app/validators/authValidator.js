const Joi = require('joi');

module.exports = {
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
