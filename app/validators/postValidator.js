const Joi = require('joi');

module.exports = {
    createPost() {
        return {
            body: Joi.object().keys({
                text: Joi.string().required(),
            })
        };
    },
};
