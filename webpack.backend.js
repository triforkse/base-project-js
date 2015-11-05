var path = require('path');
var fs = require('fs');

// HACK: To allow compiling the backend from ES6,
// we need to mark all node_modules as externals.
var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: './src/server/app.js',
  output: {
    target: 'node',
    path: path.join(__dirname, 'build'),
    filename: 'server.js'
  },
  externals: nodeModules,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};
