require('dotenv').load();

const Koa = require('./bootstrap/application');
const convert = require('koa-convert');

const app = new Koa();

app.use(convert(require('koa2-cors'))({
    allowMethods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD']
}));

require('./app/routes')(app);

module.exports = app;
