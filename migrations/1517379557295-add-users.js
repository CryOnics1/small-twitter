require('dotenv').load();
require('./utils');
const { User } = require('../app/models');
const userRepository = require('../app/repositories/userRepository');

const users = [{
    name: 'admin',
    email: 'admin@gmail.com',
    password: '111',
    isAdmin: true,
}, {
    name: 'candy',
    email: 'candy@gmail.com',
    password: '123',
}];

exports.up = async (next) => {
    await Promise.all(users.map(userRepository.createUser));
    next();
};

exports.down = async (next) => {
    await User.remove({});
    next();
};
