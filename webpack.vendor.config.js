// vendor-bundles.webpack.config.js
const webpack = require('webpack');

module.exports = {
  entry: {
    react: ['react', 'react-dom'],
    redux: ['redux', 'react-redux', 'redux-thunk', 'redux-logger'],
  },

  output: {
    filename: '[name].bundle.js',
    path: 'dist/',

    // The name of the global variable which the library's
    // require() function will be assigned to
    library: '[name]_lib',
  },

  plugins: [
    new webpack.DllPlugin({
      // The path to the manifest file which maps between
      // modules included in a bundle and the internal IDs
      // within that bundle
      path: 'dist/[name]-manifest.json',
      // The name of the global variable which the library's
      // require function has been assigned to. This must match the
      // output.library option above
      name: '[name]_lib',
    }),
  ],
};
