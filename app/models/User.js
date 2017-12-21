const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    isActive: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

userSchema.pre('save', async function preSave(next) {
    if (!this.isModified('password')) {
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
