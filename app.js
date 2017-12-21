require('dotenv').load();

const Koa = require('./bootstrap/application');
const bodyParser = require('koa-bodyparser');
const convert = require('koa-convert');


const app = new Koa();

app
    .use(bodyParser({ enableTypes: ['json', 'form', 'multipart'] }))
    .use(convert(require('koa2-cors'))({
        allowMethods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD']
    }));

require('./app/routes')(app);

module.exports = app;
