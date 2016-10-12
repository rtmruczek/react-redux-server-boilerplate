// Karma configuration
// Generated on Wed Aug 31 2016 10:35:49 GMT-0400 (Eastern Daylight Time)

const webpack = require('./webpack.test.config');

module.exports = function (config) {
  config.set({

    basePath: '',
    frameworks: ['mocha', 'chai'],

    files: [
      './test/index.js',
    ],

    plugins: ['karma-phantomjs-launcher', 'karma-chai', 'karma-mocha',
        'karma-sourcemap-loader', 'karma-webpack', 'karma-coverage',
        'karma-spec-reporter',
      ],
    // list of files to exclude
    exclude: ['/node_modules/', '/*.test.js/'],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // add webpack as preprocessor
      'src/**/*.js': ['webpack', 'sourcemap'],
      './test/index.js': ['webpack', 'sourcemap'],
    },

    webpack,
    webpackServer: {
      noInfo: true, // please don't spam the console when running in karma!
    },

    reporters: ['spec', 'coverage'],
    coverageReporter: {
      type: 'html', // produces a html document after code is run
      dir: 'coverage/', // path to created html doc
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR
    // || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
  });
};
