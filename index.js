const api = require('./api');
const mongoose = require('mongoose');
const port = process.env.PORT || 3004;

mongoose.connect('mongodb://localhost:27017/crud-mongoose-test', { useNewUrlParser: true })
  .then(api.listen(port, () => console.log("Conectado a la BD. Iniciando en http://localhost:"+port)))
  .catch((error) => console.log("Hay un problema con la base de datos: " +error));
