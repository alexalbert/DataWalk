System.register(['aurelia-framework', 'aurelia-router', './topic-provider', './sparql-adapter'], function (_export) {
  'use strict';

  var inject, computedFrom, activationStrategy, TopicProvider, SparqlAdapter, Sparql;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      computedFrom = _aureliaFramework.computedFrom;
    }, function (_aureliaRouter) {
      activationStrategy = _aureliaRouter.activationStrategy;
    }, function (_topicProvider) {
      TopicProvider = _topicProvider.TopicProvider;
    }, function (_sparqlAdapter) {
      SparqlAdapter = _sparqlAdapter.SparqlAdapter;
    }],
    execute: function () {
      Sparql = (function () {
        function Sparql(topicProvider, sparqlAdapter) {
          _classCallCheck(this, _Sparql);

          this.topicProvider = topicProvider;
          this.sparqlAdapter = sparqlAdapter;
        }

        var _Sparql = Sparql;

        _createDecoratedClass(_Sparql, [{
          key: 'activate',
          value: function activate(params, routeConfig) {
            this.topic = this.topicProvider.topics()[routeConfig.title];
            this.sparqlAdapter.setTopic(this.topic);
            this.entities = this.getEntities();
            this.currentRadio = this.entities[0];
            this.currentEntity = this.entities[0];
            this.wasProcessing = false;
            this.isProcessing = false;
            this.isMovingBack = false;
            this.history = [];
          }
        }, {
          key: 'attached',
          value: function attached() {
            $.material.init();
          }
        }, {
          key: 'getEntities',
          value: function getEntities() {
            return Object.keys(this.topic.META);
          }
        }, {
          key: 'determineActivationStrategy',
          value: function determineActivationStrategy() {
            return activationStrategy.replace;
          }
        }, {
          key: 'sendInitialQuery',
          value: function sendInitialQuery(action) {
            return this.sendQuery(this.currentRadio, action, this.searchTerm);
          }
        }, {
          key: 'sendTableQuery',
          value: function sendTableQuery(action, currentRow) {
            var key = this.topic.META[this.currentEntity][action].key;
            var searchTerm = undefined;
            if (key) {
              searchTerm = currentRow.filter(function (f) {
                return f.name === key;
              })[0].value;
            } else {
              searchTerm = currentRow[0].value;
            }
            return this.sendQuery(this.currentEntity, action, searchTerm);
          }
        }, {
          key: 'sendQuery',
          value: function sendQuery(entity, action, searchTerm) {
            var _this = this;

            if (!searchTerm) return;

            this.wasProcessing = true;
            this.isProcessing = true;

            this.currentAction = action;

            var that = this;
            return this.sparqlAdapter.querySparql(searchTerm, entity, this.currentAction).then(function (resp) {
              if (resp) {
                if (that.isMovingBack) {
                  that.history.pop();
                }
                that.isMovingBack = false;

                if (that.data) {
                  that.history.push({ data: that.data, entity: that.currentEntity,
                    title: that.title, firstRow: that.firstRow });
                }

                that.data = resp;
                that.firstRow = that.data[0];

                var context = _this.topic.META[_this.currentEntity][_this.currentAction];
                that.title = context.title.replace(/REPLACE_ME/, searchTerm);
                _this.currentEntity = context.target;

                that.searchTerm = null;
                that.isProcessing = false;
              }
            });
          }
        }, {
          key: 'sort',
          value: function sort(name) {
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
          }
        }, {
          key: 'back',
          value: function back() {
            if (this.isMovingBack) {
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
          }
        }, {
          key: 'searchActions',
          decorators: [computedFrom('currentRadio')],
          get: function get() {
            return Object.keys(this.topic.META[this.currentRadio]);
          }
        }, {
          key: 'tableActions',
          decorators: [computedFrom('currentEntity')],
          get: function get() {
            return Object.keys(this.topic.META[this.currentEntity]);
          }
        }]);

        Sparql = inject(TopicProvider, SparqlAdapter)(Sparql) || Sparql;
        return Sparql;
      })();

      _export('Sparql', Sparql);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QVEsQ0FBQyxLQUFLLENBQUM7QUFDNUIsa0JBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQzthQUNuQztXQUNGOzs7dUJBOUZBLFlBQVksQ0FBQyxjQUFjLENBQUM7ZUFDWixlQUFHO0FBQ2xCLG1CQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7V0FDeEQ7Ozt1QkFFQSxZQUFZLENBQUMsZUFBZSxDQUFDO2VBQ2QsZUFBRztBQUNqQixtQkFBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1dBQ3pEOzs7QUFuRFUsY0FBTSxHQURsQixNQUFNLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUN4QixNQUFNLEtBQU4sTUFBTTtlQUFOLE1BQU07Ozt3QkFBTixNQUFNIiwiZmlsZSI6InNwYXJxbC5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=