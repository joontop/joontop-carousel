const path = require('path');
const webpack = require('webpack');
const version = require('./package.json').version;

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    publicPath: '/lib/',
    filename: 'index.js',
    library: 'carousel',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname),
        exclude: /(node_modules)|(build)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
