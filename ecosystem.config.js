const { resolve } = require('path');

const watch = __dirname;
const ignore_watch = [
    resolve(__dirname, '.git/*'),
];

module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [
        {
            name: 'API',
            script: 'bin/app.js',
            ignore_watch,
            env_development: {
                watch,
                watch_options: {
                    ignored: ignore_watch,
                },
                NODE_ENV: 'development'
            },
            env_stage: {
                NODE_ENV: 'stage'
            },
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ],
    /**
     * Deployment section
     * http://pm2.keymetrics.io/docs/usage/deployment/
     */
    deploy: {}
};
