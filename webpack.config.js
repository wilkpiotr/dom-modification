const path = require('path');

module.exports = {
  entry: { 
    a: './src/a.js',
    b: './src/b.js',
    c: './src/c.js',
    a0: './src/a0.js',
    d: './src/d.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9001,
    hot: true,
    watchContentBase: true
  }
};