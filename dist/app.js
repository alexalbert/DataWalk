System.register(['bootstrap', 'bootstrap/css/bootstrap.css!', 'aurelia-framework', './topic-provider'], function (_export) {
  'use strict';

  var inject, TopicProvider, App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_bootstrap) {}, function (_bootstrapCssBootstrapCss) {}, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_topicProvider) {
      TopicProvider = _topicProvider.TopicProvider;
    }],
    execute: function () {
      App = (function () {
        function App(topicProvider) {
          _classCallCheck(this, _App);

          this.topicProvider = topicProvider;
        }

        var _App = App;

        _createClass(_App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'Data Walk';

            var map = [];

            var topics = Object.keys(this.topicProvider.topics());

            for (var i = 0; i < topics.length; i++) {
              var topic = topics[i];
              map.push({
                route: i == 0 ? ['', topic] : topic,
                moduleId: './sparql',
                nav: true,
                title: topic });
            }

            config.map(map);

            this.router = router;
          }
        }]);

        App = inject(TopicProvider)(App) || App;
        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkJBTWEsR0FBRzs7Ozs7Ozs7aUNBSlIsTUFBTTs7cUNBQ04sYUFBYTs7O0FBR1IsU0FBRztBQUVILGlCQUZBLEdBQUcsQ0FFRixhQUFhLEVBQUM7OztBQUN4QixjQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztTQUNwQzs7bUJBSlUsR0FBRzs7OztpQkFNQyx5QkFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDO0FBQzdCLGtCQUFNLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQzs7QUFFM0IsZ0JBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQzs7QUFFYixnQkFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7O0FBRXJELGlCQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN0QyxrQkFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RCLGlCQUFHLENBQUMsSUFBSSxDQUFDO0FBQ1IscUJBQUssRUFBRyxBQUFDLENBQUMsSUFBSSxDQUFDLEdBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEdBQUcsS0FBSztBQUN0Qyx3QkFBUSxFQUFFLFVBQVU7QUFDcEIsbUJBQUcsRUFBRSxJQUFJO0FBQ1QscUJBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQ25COztBQUVELGtCQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUVoQixnQkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7V0FDdEI7OztBQXpCVSxXQUFHLEdBRGYsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUNULEdBQUcsS0FBSCxHQUFHO2VBQUgsR0FBRzs7O3FCQUFILEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==