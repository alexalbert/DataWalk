var aurelia = require('aurelia-cli');

  aurelia.command('bundle', {
    js: {
      "dist/app-bundle": {
        modules: [
          '*',
          'aurelia-bootstrapper',
          'aurelia-http-client',
          'aurelia-router',
          'aurelia-animator-css',
          'github:aurelia/templating-binding@0.11.0',
          'github:aurelia/templating-resources@0.11.1',
          'github:aurelia/templating-router@0.12.0',
          'github:aurelia/loader-default@0.7.0',
          'github:aurelia/history-browser@0.4.0',
          'github:aurelia/html-template-element@0.2.0',
          'github:webcomponents/webcomponentsjs@0.6.3/HTMLImports.min'
        ],
        options: {
          inject: true,
          minify: true
        }
      }
    }
  });