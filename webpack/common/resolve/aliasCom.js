const path = require('path');

const aliasCom = {
  Components: path.resolve(__dirname, './../../../src/components'),
  Conteiners: path.resolve(__dirname, './../../../src/containers'),
  Images: path.resolve(__dirname, './../../../src/assets/images'),
  Module: path.resolve(__dirname, './../../../src/module'),
  StoreActions: path.resolve(__dirname, './../../../src/store/actions'),
  StoreConstans: path.resolve(__dirname, './../../../src/store/constans'),
  StoreReducers: path.resolve(__dirname, './../../../src/store/reducers'),
};

module.exports = aliasCom;
