const Koa = require('koa');
const logger = require('winston');
const config = require('../config');
const mongoose = require('./mongoose');

class Application extends Koa {
    async start() {
        logger.info('App enviroment (process.env.NODE_ENV): %s', process.env.NODE_ENV);
        await this.connectMongoose();

        this.server = this.listen(config.port, config.host, () =>
            logger.info('Listening api server on host %s:%s', config.host, config.port));
    }

    async stop() {
        await new Promise((resolve, reject) => {
            if (typeof this.server.close === 'function') {
                this.server = this.server.close(err => (err ? reject(err) : resolve()));
                logger.info('Stop listening on host %s:%s', config.host, config.port);
            }
        });
    }

    async connectMongoose() {
        if (mongoose.connection.readyState !== 1) {
            await mongoose.connect(config.mongoose.uri, config.mongoose.options);
        }
    }
}

module.exports = Application;
