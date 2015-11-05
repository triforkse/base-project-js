'use strict'

var webpack = require('webpack');
var path = require("path");

module.exports = {
  entry: "./src/client/app.jsx",
  
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ["babel"],
        exclude: /node_modules/,
        include: path.join(__dirname,  "src/client")
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'client.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
