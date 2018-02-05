require('dotenv').load();

const mongoUri = `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`;

module.exports = {
    host: process.env.APP_HOST,
    port: process.env.APP_PORT,
    mongoose: {
        uri: mongoUri,
        options: {
            keepAlive: 1,
            poolSize: 5,
            useMongoClient: true
        },
        logging: process.env.MONGO_LOGGING !== 'false'
    },
    jwt: {
        secretKey: process.env.SECRET_KEY,
    },
};
