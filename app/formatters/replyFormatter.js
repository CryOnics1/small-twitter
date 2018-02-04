const moment = require('moment');

module.exports = {
    get(reply) {
        return {
            id: reply._id,
            userId: reply.user && reply.user._id,
            author: reply.user && reply.user.name,
            text: reply.text,
            createdAt: moment(reply.createdAt).utc().format('YYYY-MM-DD HH:mm'),
            updatedAt: moment(reply.updateddAt).utc().format('YYYY-MM-DD HH:mm'),
        };
    },

    list(replies) {
        return replies.map(this.get);
    },
};
