const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webPackConfig = require('./webpack.config.js');

const compiler = webpack(webPackConfig);
const webServerConfig = {
  hot: true,
  historyApiFallback: true,
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
  },
};

const server = new WebpackDevServer(compiler, webServerConfig);


server.listen(3000);
console.info('==> 🌎 Listening on port %s', 3000);
require('./server/server').startServer();
