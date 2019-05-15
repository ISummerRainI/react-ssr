const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: {
    app: path.join(__dirname, '../client/server-entry.js')
  },
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/',
    filename: 'server-entry.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      views: path.join(__dirname, '../client/views'),
      store: path.join(__dirname, '../client/store'),
      util: path.join(__dirname, '../client/util')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(css|less)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', {
            loader: 'postcss-loader',
            options: {
              plugins: [ autoprefixer ]
            }
          },
          {
            loader: 'less-loader',
            options: {javascriptEnabled: true}
          }]
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('server-entry.css')
  ]
  // externals: Object.keys(require('../package.json').dependencies)
};
