const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const webpackConfig =  {
  devtool: 'cleap-module-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, '../client/index.js')
    ]
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'app_[hash:8].js',
    publicPath: '/public/'
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
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
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
    new HtmlWebpackPlugin({
        template: path.join(__dirname, '../client/index.html'),
        title: 'ReactSSR',
        filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: 'ejs-compiled-loader!' + path.join(__dirname, '../client/server.template.ejs'),
      filename: 'server.ejs'
    }),
    new ExtractTextPlugin('app_[hash:8].css')
  ],
}
if (isDev) {
  webpackConfig.mode = 'development';
  webpackConfig.devServer = {
    host: '127.0.0.1',
    port: 3000,
    open: true,
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    overlay: {
      errors: true
    },
    publicPath: '/public',
    historyApiFallback: {
      index: '/public/index.html'
    },
  };
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = webpackConfig;
