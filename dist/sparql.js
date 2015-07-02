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

          this.isProcessing = false;
          this.history = [];
          this.lastMoveForward = false;

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
          key: 'setContext',
          value: function setContext(action) {
            this.title = this.topic.META[this.currentEntity][action].title;
            this.currentEntity = this.topic.META[this.currentEntity][action].target;
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
            if (!searchTerm) return;

            this.isProcessing = true;

            this.currentAction = action;

            var that = this;
            return this.sparqlAdapter.querySparql(searchTerm, entity, this.currentAction).then(function (resp) {
              if (resp) {
                that.data = resp;
                that.firstRow = that.data[0];
                that.resolvedSearchTerm = searchTerm;
                that.searchTerm = null;
                that.isProcessing = false;

                that.setContext(that.currentAction);

                that.lastMoveForward = true;
                that.history.push({ 'data': that.data,
                  'actions': that.actions });
              }
            });
          }
        }, {
          key: 'back',
          value: function back() {
            if (this.lastMoveForward) {
              this.history.pop();
              this.lastMoveForward = false;
            }

            var snapshot = this.history.slice(-1)[0];
            if (snapshot !== undefined) {
              this.actions = snapshot.actions;
              this.data = snapshot.data;
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
//# sourceMappingURL=data:application/json;base64,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