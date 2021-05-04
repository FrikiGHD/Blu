const mongoose = require('mongoose');
require('dotenv').config();

module.exports = {
    init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            poolSize: 5,
            connectTimeoutMS: 10000,
            family: 4
        };

        mongoose.connect(`mongodb+srv://FrikiHD:${process.env.PASS}@blu.iaaoq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, dbOptions);
        mongoose.set('useFindAndModify', false);
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () => {
            console.log('El bot se ha conectado a la base de datos');
        });

        mongoose.connection.on('disconnected', () => {
            console.log('El bot se ha desconectado a la base de datos');
        });

        mongoose.connection.on('err', () => {
            console.log('Ha habido un error con la conexión a la base de datos: ' + err);
        });
    },
};