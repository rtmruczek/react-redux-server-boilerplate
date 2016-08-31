const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webPackConfig = require('./webpack.config.js');
const compiler = webpack(webPackConfig);
const webServerConfig = {
  publicPath: webPackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  quiet: true,
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
