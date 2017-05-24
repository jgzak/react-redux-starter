var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    hot: true,
    port: 9004,
    watchContentBase: true,
    lazy: false,
    headers: {
      "X-Custom-Foo": "jzak"
    }
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        loader : 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};