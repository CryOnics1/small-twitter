const Router = require('koa-router');

const router = new Router();

require('./auth')(router);
require('./user')(router);

router.get('/', async ctx => ctx.body = 'hello');

module.exports = (app) => {
    app.use(router.routes());
};
