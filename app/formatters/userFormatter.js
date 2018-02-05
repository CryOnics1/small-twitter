const moment = require('moment');

module.exports = {
    get(user) {
        return {
            id: user._id,
            name: user.name,
            createdAt: moment(user.createdAt).utc().format('YYYY-MM-DD HH:mm'),
            updatedAt: moment(user.updateddAt).utc().format('YYYY-MM-DD HH:mm'),
        };
    },
};
