const moment = require('moment');

module.exports = {
    get(post) {
        return {
            id: post._id,
            text: post.text,
            createdAt: moment(post.createdAt).utc().format('YYYY-MM-DD HH:mm'),
            updatedAt: moment(post.updateddAt).utc().format('YYYY-MM-DD HH:mm'),
        };
    },

    list(posts) {
        return posts.map(this.get);
    },
};
