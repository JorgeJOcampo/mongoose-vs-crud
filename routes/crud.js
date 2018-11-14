const crud = require('node-crud');
const cm = require('crud-mongoose');
const ChatConfiguration = require('../models/chatconfiguration');

crud.entity('/chatconfiguration').Read()
  .pipe(cm.findAll(ChatConfiguration))

crud.entity('/chatconfiguration').Create()
  .pipe(cm.createNew(ChatConfiguration));

crud.entity('/chatconfiguration').Delete()
  .pipe(cm.removeAll(ChatConfiguration));

module.exports = crud;
