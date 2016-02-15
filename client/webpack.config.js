var webpack = require('webpack');
var path = require("path");
var UnusedFilesWebpackPlugin = require("unused-files-webpack-plugin").default;

var config = {
  entry: "./src/app",
  output: {
    path: path.join(__dirname, 'build', 'static'),
    filename: 'app.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new UnusedFilesWebpackPlugin({
      pattern: 'src/**/*.*'
    }),
  ],
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
};

module.exports = config;
