

const mongoUrl = process.env.MONGODB_HOST || 'localhost:27017';

module.exports = {
    PORT: process.env.PORT || '3000', // production or development
    MODE: process.env.MODE || 'development', // production or development
    CONNECTION_STRING: `mongodb://${mongoUrl}/rps-game`, //mongodb connection string (required)
    API_PREFIX: 'api',
    DIR_STATIC: '../../build'
};