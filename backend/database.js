const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mean-crud';

mongoose.connect(URI, {
    // Mongo se basa en otra biblioteca llamada MongoCliete y necesita
    // una configuracion para no lanzar warnings o errores
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,

    // No neceserio, pero se agrega para evitar posibles problemas
    useNewUrlParser: true,
    useFindAndModify: false
})
        .then(db => console.log('DB is connected'))
        .catch(err => console.error(err));

module.exports = mongoose;