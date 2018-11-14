const express = require('express');
const bodyParser = require('body-parser');

const api = express();

const mongoose_routes = require('./routes/mongoose');
const crud_routes = require('./routes/crud');

api.use(bodyParser.urlencoded({extended:false}));
api.use(bodyParser.json());

api.use('/mongoose', mongoose_routes);

crud_routes.launch(api);

module.exports = api;
