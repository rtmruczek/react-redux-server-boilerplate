const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webPackConfig = require('./webpack.config.js');

const compiler = webpack(webPackConfig);
const webServerConfig = {
  hot: true,
  historyApiFallback: true,
<<<<<<< HEAD
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
=======
  quiet: true,
  proxy: {
    '*': 'http://localhost:8080', // <- backend
  },
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false,
>>>>>>> d2965c6cb4c8c8aeb85958d8f370bc15a3769ef6
  },
};

const server = new WebpackDevServer(compiler, webServerConfig);

<<<<<<< HEAD
server.listen(3000);
console.info('==> 🌎 Listening on port %s', 3000);
=======

server.listen(3000);
console.info('==> 🌎 Listening on port %s', 3000);
require('./server/server').startServer();
>>>>>>> d2965c6cb4c8c8aeb85958d8f370bc15a3769ef6
