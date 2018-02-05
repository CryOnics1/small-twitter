const { NotFoundException, BadRequestException } = require('../exceptions');
const errorMessages = require('../../config/errorMessages');


module.exports = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        if (err.name === 'ValidationError') {
            throw new NotFoundException(errorMessages.notFound);
        }

        throw new BadRequestException(errorMessages.badRequest);
    }
};

