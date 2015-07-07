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

                        map.push({ route: 'about', moduleId: './about', nav: true, title: 'About' });

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7K0JBTWEsR0FBRzs7Ozs7Ozs7dUNBSlIsTUFBTTs7MkNBQ04sYUFBYTs7O0FBR1IsZUFBRztBQUVILHlCQUZBLEdBQUcsQ0FFRixhQUFhLEVBQUM7OztBQUN4Qix3QkFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7aUJBQ3BDOzsyQkFKVSxHQUFHOzs7OzJCQU1DLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDN0IsOEJBQU0sQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDOztBQUUzQiw0QkFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDOztBQUViLDRCQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQzs7QUFFckQsNkJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3RDLGdDQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEIsK0JBQUcsQ0FBQyxJQUFJLENBQUM7QUFDUixxQ0FBSyxFQUFHLEFBQUMsQ0FBQyxJQUFJLENBQUMsR0FBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsR0FBRyxLQUFLO0FBQ3RDLHdDQUFRLEVBQUUsVUFBVTtBQUNwQixtQ0FBRyxFQUFFLElBQUk7QUFDVCxxQ0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7eUJBQ25COztBQUVELDJCQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUE7O0FBRTFFLDhCQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUVoQiw0QkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7cUJBQ3RCOzs7QUEzQlUsbUJBQUcsR0FEZixNQUFNLENBQUMsYUFBYSxDQUFDLENBQ1QsR0FBRyxLQUFILEdBQUc7dUJBQUgsR0FBRzs7OzJCQUFILEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==