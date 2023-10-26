const { default: mongoose } = require('mongoose');
//const mongoose = require('mongoose');
const { database } = require('./keys');

mongoose.connect(database.URI, {
    useNewUrlParser: true
})
    .then(db => console.log('La base de datos esta conectada '))
    .catch(err => console.error(err));