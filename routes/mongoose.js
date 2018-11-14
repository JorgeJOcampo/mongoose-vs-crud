const express = require('express');

const MongooseController = require('../controllers/mongoose');

const api = express.Router();

api.get('', MongooseController.get);
api.post('', MongooseController.post);

module.exports = api;
