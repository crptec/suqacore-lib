const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const commonJSConfig = {
  entry: ['./index.js'],
  module: {
    rules: [],
  },
  target: 'web'
};

const rawConfig = Object.assign({}, commonJSConfig, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'suqacore-lib.js',
    library: 'suqacore',
    libraryTarget: 'umd',
  }
})
const uglifiedConfig = Object.assign({}, commonJSConfig, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'suqacore-lib.min.js',
    library: 'suqacore',
    libraryTarget: 'umd',
  },
  plugins: [
    new UglifyJsPlugin()
  ]
})

module.exports = [rawConfig, uglifiedConfig];