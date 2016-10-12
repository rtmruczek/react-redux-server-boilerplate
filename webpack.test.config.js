const config = require('./webpack.config');

module.exports = Object.assign({}, config,
  config.module.loaders.push({
    test: /\.js?$/,
    exclude: /(test|node_modules)/,
    loader: 'isparta-loader',
  })
);
