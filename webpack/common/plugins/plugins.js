const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');

module.exports = (VERSION_APP, NAME_APP) => [
  new WebpackBar({ name: NAME_APP, color: '#ff4081' }),

  new HtmlWebpackPlugin({
    title: NAME_APP,
    filename: 'index.html',
    // favicon  : 'PENDIENTE',
    template: path.resolve(__dirname, './../../../src/index.ejs'),
    cache: true,
    version: VERSION_APP,
  }),
];
