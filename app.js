require('dotenv').load();

const Koa = require('./bootstrap/application');
const bodyParser = require('koa-bodyparser');
const convert = require('koa-convert');
const fs = require('fs');

const {
    errorHandlerMiddleware,
} = require('./app/middlewares');

const app = new Koa();

fs.readdirSync('./app/models').forEach(file => require(`./app/models/${file}`));

app
    .use(errorHandlerMiddleware)
    .use(bodyParser({ enableTypes: ['json'] }))
    .use(convert(require('koa2-cors'))({
        allowMethods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD']
    }));

require('./app/routes')(app);

module.exports = app;
