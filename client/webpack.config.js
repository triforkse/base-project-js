'use strict'

var webpack = require('webpack');
var path = require("path");

module.exports = {
  entry: "./src/app",
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js',
    publicPath: '/static/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ["babel"],
        exclude: /node_modules/,
        include: path.join(__dirname,  "src")
      },
      {
        test: /\.(scss|css)$/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        loader: 'file'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: [
    require('precss'),
    require('autoprefixer'),
    require('csswring')
  ]
}
