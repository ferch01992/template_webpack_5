const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');

const pluginCom = (VERSION_APP, NAME_APP) => [
  new WebpackBar({ color: '#ff4081', name: NAME_APP }),

  new HtmlWebpackPlugin({
    cache: true,
    filename: 'index.html',
    template: path.resolve(__dirname, './../../../src/index.ejs'),
    title: NAME_APP,
    // favicon  : 'PENDIENTE',
    version: VERSION_APP,
  }),
];

module.exports = pluginCom;
