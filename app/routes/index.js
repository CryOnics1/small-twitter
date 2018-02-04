const Router = require('koa-router');

const router = new Router();

require('./auth')(router);
require('./user')(router);
require('./post')(router);
require('./reply')(router);

module.exports = (app) => {
    app.use(router.routes());
};
