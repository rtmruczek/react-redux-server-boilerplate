var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: __dirname + "/src",
  entry: [
        "./index.js"
      ],

  output: {
    filename: "./index.js",
    path: __dirname + "/dist"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
      filename: 'index.html'
    })
  ],
  module: {
    loaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
      }
    ],
  }
}
