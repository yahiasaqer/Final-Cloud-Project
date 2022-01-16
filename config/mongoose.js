const mongoose = require('mongoose');
const mysql = require('mysql');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb+srv://yahia:1234@cluster0.vq7pp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const db = mongoose.connection;  //acquire the connection



db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Success db');
});





