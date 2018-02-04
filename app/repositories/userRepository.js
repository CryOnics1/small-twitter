const { User } = require('../models');

module.exports = {
    async createUser(fields) {
        const user = new User(fields);
        const savedUser = await user.save();

        return savedUser;
    },

    async findById(id) {
        return User.findById(id);
    },

    async findByEmail(email) {
        return User.findOne({ email });
    },

    async findUsers() {
        return User.find();
    },
};
