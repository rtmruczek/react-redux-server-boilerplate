const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webPackConfig = require('./webpack.config.js');

const compiler = webpack(webPackConfig);
const webServerConfig = {
  hot: true,
  historyApiFallback: true,
  stats: {
    hash: true,
    version: true,
    timings: true,
    assets: true,
    chunks: false,
    modules: false,
    reasons: true,
    children: false,
    source: false,
    errors: true,
    errorDetails: true,
    warnings: true,
    quiet: true,
  },
};

const server = new WebpackDevServer(compiler, webServerConfig);

server.listen(3000);
console.info('==> 🌎 Listening on port %s', 3000);
