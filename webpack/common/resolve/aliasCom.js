const path = require('path');

const _ = './../../../';

const aliasCom = {
  Actions: path.resolve(__dirname, `${_}src/store/actions`),
  Components: path.resolve(__dirname, `${_}src/components`),
  Conteiners: path.resolve(__dirname, `${_}src/containers`),
  Images: path.resolve(__dirname, `${_}src/assets/images`),
  Module: path.resolve(__dirname, `${_}src/module`),
  Reducers: path.resolve(__dirname, `${_}src/store/reducers`),
  StoreConstans: path.resolve(__dirname, `${_}src/store/constans`),
};

module.exports = aliasCom;
