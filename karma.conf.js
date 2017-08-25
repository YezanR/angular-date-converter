module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      './bower_components/angular/angular.js',  
      './bower_components/angular-mocks/angular-mocks.js',
      './bower_components/moment/moment.js',
      './bower_components/angular-moment/angular-moment.js',

      './component/p2DateEnToFr.module.js',
      './component/p2DateEnToFr.directive.js',

      './component/p2DateEnToFr.directive_test.js'

    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}