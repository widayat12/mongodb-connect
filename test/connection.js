const mongoose = require('mongoose');

// connect to mongodb

mongoose.connect('mongodb://localhost/tester');
mongoose.connection.once('open', function(){
    console.log('koneksi telah terbuat');
}).on('error', function(error){
    console.log('koneksi error',error);
});