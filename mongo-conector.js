const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/crud-mongoose-test')
  .then(console.log("La base de datos está OK"))
  .catch((error) => console.log("Hay un problema con la base de datos: " +error));

module.exports = mongoose;
