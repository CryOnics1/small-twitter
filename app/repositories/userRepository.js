const { User } = require('../models');

module.exports = {
    async createUser(fields) {
        const user = new User(fields);
        const savedUser = await user.save();

        return savedUser;
    },
};
