const mongoose = require('mongoose');

const replySchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    text: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
});

const Reply = mongoose.model('Reply', replySchema);

module.exports = Reply;
