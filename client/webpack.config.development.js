'use strict'

var webpack = require('webpack')
var baseConfig = require('./webpack.config')

var config = Object.create(baseConfig)
config.devtool = 'eval-source-map';
config.entry = ['webpack-hot-middleware/client', config.entry]
config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin()
]

module.exports = config
