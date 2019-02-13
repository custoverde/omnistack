const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './src/main.js',],
  output: {
    path: path.resolve(__dirname , 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname , 'public'),
  },
  module: {
    rules: [
       {
         test: /\.js$/,
         exclude: /node_modules/,
         use: {
           loader: 'babel-loader',
         }
       }
    ],
  }
}
