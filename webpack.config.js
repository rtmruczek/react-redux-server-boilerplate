const HtmlWebpackPlugin = require('html-webpack-plugin');
const join = require('path').join;
const webpack = require('webpack');

module.exports = {
  context: join(__dirname, '/src'),
  entry: [
    'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './index.js',
  ],

  output: {
    filename: './index.[hash].js',
    path: join(__dirname, '/dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'inline-source-map',
  module: {
    preLoaders: [
       { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ },
    ],
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loaders: ['babel'],
    },
    {
      test: /\.css?$/,
      loader: 'style!css',
    },
    {
      test: /\.scss?$/,
      loaders: ['style', 'css', 'sass'],
    },
    {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      loader: 'file-loader',
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192',
    },
    {
      test: /\.json?$/,
      loader: 'json',
    }],
  },

};
