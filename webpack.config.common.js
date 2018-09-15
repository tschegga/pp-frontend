const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry:   [
    './src/client/main.js'
  ],
  output:  {
    path:       path.join(__dirname, 'public/dist'),
    filename:   'pottpokal.js',
    publicPath: '/dist'
  },
  module:  {
    loaders: [
      {
        test:    /\.js$/,
        loader:  'babel',
        exclude: /node_modules/
      },
      {
        test:    /\.js$/,
        loader:  'eslint',
        exclude: /node_modules/
      },
      {
          test: /\.css/,
          loaders: ['style', 'css'],
          exclude: /node_modules/
      }
    ]
  },
  node: {
    fs: 'empty'
  }
};