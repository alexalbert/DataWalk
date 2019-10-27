define('about',["exports", "aurelia-router"], function (_exports, _aureliaRouter) {
  "use strict";

  _exports.__esModule = true;
  _exports.About = void 0;

  var About = function About() {};

  _exports.About = About;
});;
define('text!about.html',[],function(){return "<template>\r\n  <div class=\"container\">\r\n    <section class=\"au-animate\">\r\n      <h1 class='text-primary'>DataWalk</h1>\r\n      <br>\r\n      <p>A demo app using\r\n        <a href=\"http://www.aurelia.io/\" target='_blank'>Aurelia</a>,\r\n        <a href=\"https://fezvrasta.github.io/bootstrap-material-design\" target=\"_blank \">material design theme for Boostrap</a>, and\r\n        <a href=\"http://www.w3.org/TR/rdf-sparql-query/\" target=\"_blank\">SPARQL</a>to retrieve data from\r\n        <a href=\"http://www.w3.org/RDF/\" target=\"_blank\">RDF</a>databases.</p>\r\n      <br>\r\n      <p>Pluggable modules describe interfaces to subsets of RDF data, generic view provides user interface.</p>\r\n      <br>\r\n      <p>Source code:\r\n        <a href=\"https://github.com/alexalbert/DataWalk \" target=\"_blank \">https://github.com/alexalbert/DataWalk</a>\r\n      </p>\r\n      <br>\r\n      <p>Built by:</p>\r\n      <h4>Alex Albert</h4>\r\n      <a href=\"mailto:albalex@gmail.com \" target=\"_blank \">albalex@gmail.com</a>\r\n    </section>\r\n  </div>\r\n</template>";});;
define('animation-main',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.configure = configure;

  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging().plugin('aurelia-animator-css');
    aurelia.start().then(function (a) {
      return a.setRoot();
    });
  }
});;
define('app',["exports", "aurelia-pal", "aurelia-framework", "./topic-provider"], function (_exports, _aureliaPal, _aureliaFramework, _topicProvider) {
  "use strict";

  _exports.__esModule = true;
  _exports.App = void 0;

  var _dec, _class;

  var App = (_dec = (0, _aureliaFramework.inject)(_topicProvider.TopicProvider), _dec(_class =
  /*#__PURE__*/
  function () {
    function App(topicProvider) {
      this.topicProvider = topicProvider;
    }

    var _proto = App.prototype;

    _proto.configureRouter = function configureRouter(config, router) {
      config.title = 'Data Walk';
      var map = [];
      var topics = Object.keys(this.topicProvider.topics());

      for (var i = 0; i < topics.length; i++) {
        var topic = topics[i];
        map.push({
          route: i == 0 ? ['', topic] : topic,
          moduleId: _aureliaPal.PLATFORM.moduleName('sparql'),
          nav: true,
          title: topic
        });
      }

      map.push({
        route: 'about',
        moduleId: _aureliaPal.PLATFORM.moduleName('about'),
        nav: true,
        title: 'About'
      });
      config.map(map);
      this.router = router;
    } // configureRouter(config, router){
    //   config.title = 'Contacts';
    //   config.map([
    //     { route: '',              moduleId: PLATFORM.moduleName('no-selection'),   title: 'Select' },
    //     { route: 'contacts/:id',  moduleId: PLATFORM.moduleName('contact-detail'), name:'contacts' }
    //   ]);
    //   this.router = router;
    // }
    ;

    return App;
  }()) || _class); // import 'bootstrap';
  // import 'bootstrap/css/bootstrap.css!';
  // import {inject} from 'aurelia-framework';
  // import {TopicProvider} from './topic-provider' ;
  // @inject(TopicProvider)
  // export class App {
  //   constructor(topicProvider){
  //     this.topicProvider = topicProvider;
  //   }
  //   configureRouter(config, router){
  //     config.title = 'Data Walk';
  //     var map = [];
  //     var topics = Object.keys(this.topicProvider.topics());
  //      for (let i = 0; i < topics.length; i++) {
  //        var topic = topics[i];
  //        map.push({ 
  //         route:  (i == 0) ? ['', topic] : topic,  
  //         moduleId: './sparql', 
  //         nav: true, 
  //         title: topic });
  //     }
  //     map.push({route: 'about', moduleId: './about', nav: true, title: 'About'})
  //     config.map(map);
  //     this.router = router;
  //   }
  // }

  _exports.App = App;
});;
define('text!app.html',[],function(){return "<template>\n  <head>\n    <title>Data Walk</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    </head> \n  \n  <require from='./nav-bar'></require>\n  \n  <require from=\"../styles/material-ripples.min.css\"></require>\n  <require from=\"bootstrap/dist/css/bootstrap.min.css\"></require>\n  <require from=\"font-awesome/css/font-awesome.min.css\"></require>\n  <require from=\"../styles/styles.css\"></require>\n  <require from=\"../styles/material-fullpalette-custom.css\"></require>\n  styles\\material-fullpalette-custom.css\n\n\n  <nav-bar router.bind=\"router\"></nav-bar>\n\n  <div class=\"page-host\">\n    <router-view></router-view>\n  </div>\n<script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/0.3.0/js/material.min.js\"></script>\n<script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/0.3.0/js/ripples.min.js\"></script>\n</template>\n";});;
define('environment',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  var _default = {
    debug: true,
    testing: true
  };
  _exports.default = _default;
});;
define('main',["exports", "regenerator-runtime/runtime", "./environment", "aurelia-pal"], function (_exports, _runtime, _environment, _aureliaPal) {
  "use strict";

  _exports.__esModule = true;
  _exports.configure = configure;
  _environment = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // regenerator-runtime is to support async/await syntax in ESNext.
  // If you don't use async/await, you can remove regenerator-runtime.
  // import * as environment from '../config/environment.json';
  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature(_aureliaPal.PLATFORM.moduleName('resources/index'));
    aurelia.use.developmentLogging(_environment.default.debug ? 'debug' : 'warn');

    if (_environment.default.testing) {
      aurelia.use.plugin(_aureliaPal.PLATFORM.moduleName('aurelia-testing'));
    }

    aurelia.start().then(function () {
      return aurelia.setRoot(_aureliaPal.PLATFORM.moduleName('app'));
    });
  }
});;
define('nav-bar',["exports", "aurelia-framework"], function (_exports, _aureliaFramework) {
  "use strict";

  _exports.__esModule = true;
  _exports.NavBar = void 0;

  var _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

  var NavBar = (_class = (_temp = function NavBar() {
    _initializerDefineProperty(this, "router", _descriptor, this);
  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return null;
    }
  })), _class);
  _exports.NavBar = NavBar;
});;
define('text!nav-bar.html',[],function(){return "<template>\n  <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n        <span class=\"sr-only\">Toggle Navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">\n        <i class=\"fa fa-home\"></i>\n        <span>${router.title}</span>\n      </a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\">\n          <a data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1.in\" href.bind=\"row.href\">${row.title}</a>\n        </li>\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"loader\" if.bind=\"router.isNavigating\">\n          <i class=\"fa fa-spinner fa-spin fa-2x\"></i>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</template>\n";});;
define('resources/index',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.configure = configure;

  function configure(config) {
    config.globalResources([]);
  }
});;
define('sparql',["exports", "aurelia-framework", "aurelia-router", "./topic-provider", "./sparql-adapter"], function (_exports, _aureliaFramework, _aureliaRouter, _topicProvider, _sparqlAdapter) {
  "use strict";

  _exports.__esModule = true;
  _exports.Sparql = void 0;

  var _dec, _dec2, _dec3, _class, _class2, _temp;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  var Sparql = (_dec = (0, _aureliaFramework.inject)(_topicProvider.TopicProvider, _sparqlAdapter.SparqlAdapter), _dec2 = (0, _aureliaFramework.computedFrom)('currentRadio'), _dec3 = (0, _aureliaFramework.computedFrom)('currentEntity'), _dec(_class = (_class2 = (_temp =
  /*#__PURE__*/
  function () {
    function Sparql(topicProvider, sparqlAdapter) {
      this.entities = void 0;
      this.currentRadio = void 0;
      this.currentEntity = void 0;
      this.title = void 0;
      this.sparqlAdapter = void 0;
      this.wasProcessing = void 0;
      this.isProcessing = void 0;
      this.data = void 0;
      this.firstRow = void 0;
      this.isMovingBack = void 0;
      this.history = void 0;
      this.topicProvider = topicProvider;
      this.sparqlAdapter = sparqlAdapter;
    }

    var _proto = Sparql.prototype;

    _proto.activate = function activate(params, routeConfig) {
      this.topic = this.topicProvider.topics()[routeConfig.title];
      this.sparqlAdapter.setTopic(this.topic);
      this.entities = this.getEntities();
      this.currentRadio = this.entities[0];
      this.currentEntity = this.entities[0];
      this.wasProcessing = false;
      this.isProcessing = false;
      this.isMovingBack = false;
      this.history = [];
    };

    _proto.attached = function attached() {
      $.material.init();
    };

    _proto.getEntities = function getEntities() {
      return Object.keys(this.topic.META);
    };

    _proto.determineActivationStrategy = function determineActivationStrategy() {
      return _aureliaRouter.activationStrategy.replace;
    };

    _proto.sendInitialQuery = function sendInitialQuery(action) {
      return this.sendQuery(this.currentRadio, action, this.searchTerm);
    };

    _proto.sendTableQuery = function sendTableQuery(action, currentRow) {
      var key = this.topic.META[this.currentEntity][action].key;
      var searchTerm;

      if (key) {
        searchTerm = currentRow.filter(function (f) {
          return f.name === key;
        })[0].value;
      } else {
        searchTerm = currentRow[0].value;
      }

      return this.sendQuery(this.currentEntity, action, searchTerm);
    };

    _proto.sendQuery = function sendQuery(entity, action, searchTerm) {
      if (!searchTerm) return;
      this.wasProcessing = true;
      this.isProcessing = true;
      var that = this;
      return this.sparqlAdapter.querySparql(searchTerm, entity, action).then(function (resp) {
        if (resp) {
          if (that.isMovingBack) {
            that.history.pop();
          }

          that.isMovingBack = false; // Push previous frame to history

          if (that.data) {
            that.history.push({
              data: that.data,
              entity: that.currentEntity,
              title: that.title,
              firstRow: that.firstRow
            });
          }

          that.data = resp;
          that.firstRow = that.data[0];
          var context = that.topic.META[entity][action];
          that.title = context.title.replace(/REPLACE_ME/, searchTerm);
          that.currentEntity = context.target;
          that.searchTerm = null;
          that.isProcessing = false;
        }
      });
    };

    _proto.sort = function sort(name) {
      var index = undefined;
      this.firstRow.some(function (el, ind) {
        index = ind;
        return el.name === name;
      });
      if (index == undefined) return;
      this.data.sort(function (a, b) {
        if (a[index].value < b[index].value) return -1;
        if (a[index].value > b[index].value) return 1;
        return 0;
      });
    };

    _proto.back = function back() {
      if (this.isMovingBack) {
        // Drop last frame
        this.history.pop();
      }

      this.isMovingBack = true;
      var snapshot = this.history.slice(-1)[0];

      if (snapshot !== undefined) {
        this.currentEntity = snapshot.entity;
        this.data = snapshot.data;
        this.title = snapshot.title;
        this.firstRow = snapshot.firstRow;
      }
    };

    _createClass(Sparql, [{
      key: "searchActions",
      get: function get() {
        return Object.keys(this.topic.META[this.currentRadio]);
      }
    }, {
      key: "tableActions",
      get: function get() {
        return Object.keys(this.topic.META[this.currentEntity]);
      }
    }]);

    return Sparql;
  }(), _temp), (_applyDecoratedDescriptor(_class2.prototype, "searchActions", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "searchActions"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "tableActions", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "tableActions"), _class2.prototype)), _class2)) || _class);
  _exports.Sparql = Sparql;
});;
define('sparql-adapter',["exports", "aurelia-framework", "aurelia-http-client"], function (_exports, _aureliaFramework, _aureliaHttpClient) {
  "use strict";

  _exports.__esModule = true;
  _exports.SparqlAdapter = void 0;

  var _dec, _class, _temp;

  var SparqlAdapter = (_dec = (0, _aureliaFramework.inject)(_aureliaHttpClient.HttpClient), _dec(_class = (_temp =
  /*#__PURE__*/
  function () {
    function SparqlAdapter(http) {
      this.http = void 0;
      this.topic = void 0;
      this.http = http;
    }

    var _proto = SparqlAdapter.prototype;

    _proto.setTopic = function setTopic(topic) {
      this.topic = topic;
    };

    _proto.querySparql = function querySparql(searchTerm, entity, action) {
      var _this = this;

      var queryFunction = this.topic.META[entity][action].query;
      var sparqlQuery = queryFunction(this.removeQuotes(searchTerm), this.topic);
      var queryUrl = this.topic.ENDPOINT + "?query=" + this.topic.PREFIXES + sparqlQuery;
      queryUrl = this.encode(queryUrl);
      queryUrl = queryUrl + "&output=json";
      console.log(queryUrl);
      return this.http.jsonp(queryUrl, 'callback').then(function (resp) {
        var results = _this.topic.editResponse(resp.content.results);

        var data = results.bindings.map(function (row) {
          // Map rows
          return Object.keys(row).map(function (key) {
            // Map fields of a row
            return {
              'name': key,
              'type': row[key].type,
              'value': row[key].value
            };
          });
        });
        console.log(data);
        return data;
      }, function (err) {
        console.log(err);
        return null;
      });
    } // Encode some characters to make SPARQL happy
    ;

    _proto.encode = function encode(str) {
      return str.replace(/#/g, "%23").replace(/&/g, "%26").replace(/ /g, "%20").replace(/</g, "%3C").replace(/[\n\r]/g, '');
    } // Remove  quotes as they break enclosing quotes in resulting query
    ;

    _proto.removeQuotes = function removeQuotes(str) {
      return str.replace(/'/g, "");
    };

    return SparqlAdapter;
  }(), _temp)) || _class);
  _exports.SparqlAdapter = SparqlAdapter;
});;
define('text!sparql.html',[],function(){return "<template>\r\n  <section class=\"au-animate\">\r\n    <div class='container'>\r\n      <div class='span12'>\r\n        <br>\r\n        <p class='text-primary'>${topic.description}</p>\r\n        <div class=\"row\" show.bind=\"entities.length > 1\"> \r\n          <div repeat.for=\"en of entities\" class=\"radio radio-info pull-left\" style=\"margin-top: 10px\">\r\n            <label>\r\n              <input type=\"radio\" name=\"en\" value.bind=\"en\" checked.bind=\"$parent.currentRadio\" />${en}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div>\r\n            <form class=\"navbar-form navbar-left form-control\">\r\n              <input type=\"text\" value.bind=\"searchTerm\" class=\"form-control  col-xs-2\" placeholder=\"${currentRadio}\" id=\"search\">\r\n            </form>\r\n          </div>\r\n          <div class=\"btn-toolbar\">\r\n            <a repeat.for=\"action of searchActions\" click.trigger='$parent.sendInitialQuery(action)' class=\"btn  btn-info btn-sm\">${action}</a>\r\n          </div>\r\n        </div>\r\n        <div show.bind=\"isProcessing\" class=\"spinner\">\r\n          <i class=\"fa fa-spinner fa-spin fa-3x\"></i>\r\n        </div>\r\n        <div show.bind=\"!isProcessing\" class=\"row\">\r\n          <h3 if.bind=\"data.length\" class=\"pull-left\" style=\"margin-bottom: 20px\">${title} - ${data.length} found</h3>\r\n          <button show.bind=\"history.length && (history.length > 1 || !isMovingBack)\" \r\n                  click.trigger=\"back()\" class=\"btn btn-primary btn-flat pull-right\">\r\n            <i class=\"fa fa-undo fa-2x\"></i>\r\n          </button>\r\n        </div>\r\n        <h4 show.bind=\"wasProcessing && !isProcessing && !data.length\">No results found</h4>\r\n        <div show.bind=\"!isProcessing && data.length\" class=\"table-responsive\">\r\n          <table class=\"table table-condensed table-hover\">\r\n            <tr class=\"info\">\r\n              <th  repeat.for=\"cell of firstRow\">\r\n                <h4 if.bind=\"cell.type !== 'uri'\"  class=\"btn btn-flat btn-primary\"\r\n                  click.trigger='$parent.sort(cell.name)'>${cell.name}</h4>\r\n              </th>\r\n              <th repeat.for=\"a of tableActions\"></th>\r\n            </tr>\r\n            <tbody>\r\n              <tr class='info' repeat.for=\"row of data\">\r\n                <td repeat.for=\"cell of row\">\r\n                  <label if.bind=\"cell.type !== 'uri'\" style=\"padding-top: 20px; color: @purple\">${cell.value}</label>\r\n                  <a if.bind=\"cell.type === 'uri'\" href=\"${cell.value}\" target=\"_blank\" class=\"btn btn-flat  btn-info\">${cell.name}</a>\r\n                </td>\r\n                <td repeat.for=\"action of $parent.tableActions\">\r\n                  <a click.trigger='$parent.$parent.sendTableQuery(action, $parent.row)' class=\"btn btn-flat  btn-primary\">${action}</a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <br/>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</template>\r\n";});;
define('text!styles.css',[],function(){return "body {\n  margin: 0;\n}\n\n.splash {\n    text-align: center;\n    margin: 10% 0 0 0;\n    box-sizing: border-box;\n}\n\n.splash .message {\n    font-size: 48px;\n    line-height: 48px;\n    text-shadow: rgba(0, 0, 0, 0.5) 0 0 15px;\n    text-transform: uppercase;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.splash .fa-spinner {\n    text-align: center;\n    display: inline-block;\n    font-size: 72px;\n    margin-top: 50px;\n}\n\n.page-host {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 50px;\n    bottom: 0;\n    overflow-x: hidden;\n    overflow-y: auto;\n}\n\nsection {\n    margin: 0 20px;\n}\n\n.navbar-nav li.loader {\n    margin: 12px 24px 0 6px;\n}\n\n/*.pictureDetail {\n    max-width: 425px;\n}*/\n\n/* animate page transitions */\nsection.au-enter-active {\n  -webkit-animation: fadeInRight 1s;\n  animation: fadeInRight 1s;\n}\n\n/* animation definitions */\n@-webkit-keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0)\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none\n  }\n}\n\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    -ms-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0)\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none\n  }\n}\n\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n/*.table > tbody > tr > td {\n     vertical-align: middle;\n}*/\n";});;
define('topic-provider',["exports", "aurelia-framework", "./topics/sparql-movies", "./topics/sparql-programing_languages", "./topics/sparql-nobels"], function (_exports, _aureliaFramework, _sparqlMovies, _sparqlPrograming_languages, _sparqlNobels) {
  "use strict";

  _exports.__esModule = true;
  _exports.TopicProvider = void 0;

  var _dec, _class;

  var TopicProvider = (_dec = (0, _aureliaFramework.inject)(_sparqlMovies.SparqlMovies, _sparqlPrograming_languages.SparqlProgramingLanguages, _sparqlNobels.SparqlNobels, _sparqlNobels.SparqlNobels), _dec(_class =
  /*#__PURE__*/
  function () {
    function TopicProvider(sparqlMovies, sparqlProgramingLanguages, sparqlNobels1, sparqlNobels2) {
      this.sparqlMovies = sparqlMovies;
      this.sparqlProgramingLanguages = sparqlProgramingLanguages;
      sparqlNobels1.showWiki = false;
      this.sparqlNobels = sparqlNobels1;
      sparqlNobels2.showWiki = true;
      ;
      this.sparqlNobelsWiki = sparqlNobels2;
    }

    var _proto = TopicProvider.prototype;

    _proto.topics = function topics() {
      return {
        "Movies": this.sparqlMovies,
        "Programing Languages": this.sparqlProgramingLanguages,
        "Nobel Prizes": this.sparqlNobels,
        "Nobel Prizes (slower)": this.sparqlNobelsWiki
      };
    };

    return TopicProvider;
  }()) || _class);
  _exports.TopicProvider = TopicProvider;
});;
define('topics/sparql-movies',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.SparqlMovies = void 0;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var SparqlMovies =
  /*#__PURE__*/
  function () {
    function SparqlMovies() {
      this.ENDPOINT = "http://dbpedia.org/sparql";
      this.PREFIXES = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n    PREFIX foaf:  <http://xmlns.com/foaf/0.1/>\n    PREFIX owl: <http://www.w3.org/2002/07/owl#>\n    PREFIX rr: <http://www.w3.org/ns/r2rml#>\n    PREFIX dbpedia: <http://dbpedia.org/resource/>\n    PREFIX dbpedia-owl: <http://dbpedia.org/ontology/>\n    PREFIX db: <http://dbpedia.org/>\n    PREFIX dbp: <http://dbpedia.org/property/>\n  ";
      this.META = {
        'Director': {
          'Films': {
            target: 'Film',
            title: 'Films of REPLACE_ME',
            query: this.filmsOfDirector
          }
        },
        'Actor': {
          'Films': {
            target: 'Film',
            title: 'Films of REPLACE_ME',
            query: this.filmsOfActor
          }
        },
        'Film': {
          'Actors': {
            target: 'Actor',
            title: 'Actors in REPLACE_ME',
            query: this.actorsOfFilm
          },
          'Director': {
            target: 'Director',
            title: 'Director of REPLACE_ME',
            query: this.directorsOfFilm
          }
        }
      };
    }

    var _proto = SparqlMovies.prototype;

    _proto.filmsOfDirector = function filmsOfDirector(name) {
      var names = name.split(',');

      if (names.length === 1) {
        names.unshift('');
      }

      var firstName = encodeURI(names[0]);
      var lastName = encodeURI(names[1]);
      return "SELECT DISTINCT ?Film  ?Wiki WHERE {\n    ?f rdf:type dbpedia-owl:Film .\n    ?f dbpedia-owl:director ?director .\n    ?f  rdfs:label ?Film .\n    ?f foaf:isPrimaryTopicOf ?Wiki .\n    ?director a dbpedia-owl:Person .\n    ?director rdfs:label ?name .\n    ?name   bif:contains  '\"" + lastName + "\"' .\n    FILTER (langMatches(lang(?Film), \"EN\")\n     &&  regex(str(?name), \"^" + firstName + ".*\", 'i')).\n    }";
    };

    _proto.filmsOfActor = function filmsOfActor(name) {
      var names = name.split(',');

      if (names.length === 1) {
        names.unshift('');
      }

      var firstName = encodeURI(names[0]);
      var lastName = encodeURI(names[1]);
      return "SELECT DISTINCT ?Film  ?Wiki WHERE {\n    ?f rdf:type dbpedia-owl:Film .\n    ?f dbpedia-owl:starring ?actor .\n    ?f  rdfs:label ?Film .\n    ?f foaf:isPrimaryTopicOf ?Wiki .\n    ?actor a dbpedia-owl:Person .\n    ?actor rdfs:label ?name .\n    ?name   bif:contains  '\"" + lastName + "\"' .\n    FILTER (langMatches(lang(?Film), \"EN\")\n     &&  regex(str(?name), \"^" + firstName + "\", 'i')\n     && !regex(str(?name), \".*,.*\")) .\n    }";
    };

    _proto.actorsOfFilm = function actorsOfFilm(film) {
      return "SELECT DISTINCT ?Actor ?Wiki WHERE {\n    ?f rdf:type dbpedia-owl:Film .\n    ?f  rdfs:label ?Film .\n\t  ?f  dbo:starring ?a .\n    ?a rdfs:label ?Actor .\n    ?a foaf:isPrimaryTopicOf ?Wiki .\n    ?Film bif:contains  '\"" + film + "\"' .\n    FILTER (langMatches(lang(?Actor), \"EN\")) .\n    }";
    };

    _proto.directorsOfFilm = function directorsOfFilm(film) {
      return "SELECT DISTINCT ?Director ?Wiki   WHERE {\n    ?f rdf:type dbpedia-owl:Film .\n    ?f  rdfs:label ?Film .\n    ?Film bif:contains  '\"" + film + "\"' .\n    ?f dbpedia-owl:director ?d .\n    ?d rdfs:label ?Director .\n    ?d foaf:isPrimaryTopicOf ?Wiki .\n    FILTER (langMatches(lang(?Director), \"EN\")) .\n    }";
    };

    _proto.editResponse = function editResponse(response) {
      return response;
    };

    _createClass(SparqlMovies, [{
      key: "description",
      get: function get() {
        return 'Source: wiki.dbpedia.org.';
      }
    }]);

    return SparqlMovies;
  }();

  _exports.SparqlMovies = SparqlMovies;
});;
define('topics/sparql-nobels',["exports", "aurelia-framework"], function (_exports, _aureliaFramework) {
  "use strict";

  _exports.__esModule = true;
  _exports.SparqlNobels = void 0;

  var _dec, _class, _temp;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var SparqlNobels = (_dec = (0, _aureliaFramework.transient)(), _dec(_class = (_temp =
  /*#__PURE__*/
  function () {
    function SparqlNobels() {
      this.withWiki = false;
      this.ENDPOINT = "http://data.nobelprize.org/sparql";
      this.PREFIXES = "PREFIX dbpedia-owl: <http://dbpedia.org/ontology/>\n  PREFIX nobel: <http://data.nobelprize.org/terms/>\n  PREFIX foaf: <http://xmlns.com/foaf/0.1/>\n  PREFIX yago: <http://yago-knowledge.org/resource/>\n  PREFIX viaf: <http://viaf.org/viaf/>\n  PREFIX meta: <http://www4.wiwiss.fu-berlin.de/bizer/d2r-server/metadata#>\n  PREFIX dcterms: <http://purl.org/dc/terms/>\n  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n  PREFIX d2r: <http://sites.wiwiss.fu-berlin.de/suhl/bizer/d2r-server/config.rdf#>\n  PREFIX dbpedia: <http://dbpedia.org/resource/>\n  PREFIX owl: <http://www.w3.org/2002/07/owl#>\n  PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n  PREFIX map: <http://data.nobelprize.org/resource/#>\n  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n  PREFIX freebase: <http://rdf.freebase.com/ns/>\n  PREFIX dbpprop: <http://dbpedia.org/property/>\n  PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n  ";
      this.META = {
        'Search by =>': {
          'Category': {
            target: 'Search by =>',
            title: 'Nobel laureates in REPLACE_ME',
            key: 'Category',
            query: this.byCategory
          },
          'Year': {
            target: 'Search by =>',
            title: 'REPLACE_ME Nobel laureates',
            key: 'Year',
            query: this.byYear
          },
          'Country': {
            target: 'Search by =>',
            title: 'Nobel laureates born in REPLACE_ME',
            key: 'Country',
            query: this.byCountry
          }
        }
      };
    }

    var _proto = SparqlNobels.prototype;

    _proto.query = function query(filter, withWiki) {
      var WIKI_CLAUSE = this.withWiki ? " SERVICE <http://dbpedia.org/sparql?default-graph-uri=http://dbpedia.org>\n      {\n        ?wklink foaf:isPrimaryTopicOf ?Wiki .\n      }" : "";
      return "SELECT DISTINCT ?Name ?Category ?Year ?Country ?Wiki WHERE {\n      ?p rdfs:label ?Name .\n      ?p nobel:nobelPrize ? ?np .\n      ?np nobel:year ?Year .\n      ?p dbpedia-owl:birthPlace ?placeOfBirth .\n      ?placeOfBirth rdf:type dbpedia-owl:Country .\n      ?placeOfBirth rdfs:label ?Country .\n      ?np nobel:category ?npcategory .\n      ?npcategory rdfs:label ?Category .\n      ?p owl:sameAs ?wklink .\n      FILTER(" + filter + ") .\n      " + WIKI_CLAUSE + "\n      }";
    };

    _proto.byYear = function byYear(year, that) {
      return that.query("?Year = " + year);
    };

    _proto.byCountry = function byCountry(country, that) {
      return that.query("?Country = '" + country + "'");
    };

    _proto.byCategory = function byCategory(category, that) {
      return that.query("?Category = '" + category + "'");
    };

    _proto.editResponse = function editResponse(response) {
      return response;
    };

    _createClass(SparqlNobels, [{
      key: "showWiki",
      set: function set(showWiki) {
        this.withWiki = showWiki;
      }
    }, {
      key: "description",
      get: function get() {
        return this.withWiki ? 'Source: data.nobelprize.org and wiki.dbpedia.org.' : 'Source: data.nobelprize.org.';
      }
    }]);

    return SparqlNobels;
  }(), _temp)) || _class);
  _exports.SparqlNobels = SparqlNobels;
});;
define('topics/sparql-programing_languages',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.SparqlProgramingLanguages = void 0;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var SparqlProgramingLanguages =
  /*#__PURE__*/
  function () {
    function SparqlProgramingLanguages() {
      this.ENDPOINT = "http://dbpedia.org/sparql";
      this.PREFIXES = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n    PREFIX dbpedia-owl: <http://dbpedia.org/ontology/>\n    PREFIX foaf:  <http://xmlns.com/foaf/0.1/>";
      this.META = {
        'Language': {
          'Influenced': {
            target: 'Language',
            title: 'REPLACE_ME influenced',
            query: this.influenced
          },
          'Influenced by': {
            target: 'Language',
            title: 'REPLACE_ME is influenced by',
            query: this.influencedBy
          }
        }
      };
    }

    var _proto = SparqlProgramingLanguages.prototype;

    _proto.influencedBy = function influencedBy(language) {
      return "SELECT DISTINCT ?Language ?Wiki WHERE {\n      ?l rdf:type dbpedia-owl:ProgrammingLanguage .\n      ?l rdfs:label ?name .\n      ?name bif:contains '\"" + language + "\"' .\n      ?l dbpedia-owl:influencedBy ?influencer .\n      ?influencer rdfs:label ?Language .\n      ?influencer foaf:isPrimaryTopicOf ?Wiki .\n      FILTER (langMatches(lang(?Language), \"EN\")  ).\n    }";
    };

    _proto.influenced = function influenced(language) {
      return "SELECT DISTINCT ?Language ?Wiki WHERE {\n      ?l rdf:type dbpedia-owl:ProgrammingLanguage .\n      ?l rdfs:label ?name .\n      ?name bif:contains '\"" + language + "\"' .\n      ?l dbpedia-owl:influenced ?influencee .\n      ?influencee rdfs:label ?Language .\n      ?influencee foaf:isPrimaryTopicOf ?Wiki .\n      FILTER (langMatches(lang(?Language), \"EN\")  ).\n    }";
    };

    _proto.editResponse = function editResponse(json) {
      var str = JSON.stringify(json);
      var edited = str.replace(/\(programming language\)/g, "");
      return JSON.parse(edited);
    };

    _createClass(SparqlProgramingLanguages, [{
      key: "description",
      get: function get() {
        return 'Source: wiki.dbpedia.org.';
      }
    }]);

    return SparqlProgramingLanguages;
  }();

  _exports.SparqlProgramingLanguages = SparqlProgramingLanguages;
});
//# sourceMappingURL=app-bundle.js.map