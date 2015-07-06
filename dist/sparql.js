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
                  that.history.push({ data: that.data, actions: that.actions,
                    title: that.title, firstRow: that.firstRow });
                }

                that.data = resp;
                that.firstRow = that.data[0];
                that.resolvedSearchTerm = searchTerm;

                var context = _this.topic.META[_this.currentEntity][_this.currentAction];
                that.title = context.title.replace(/REPLACE_ME/, searchTerm);
                _this.currentEntity = context.target;

                that.searchTerm = null;
                that.isProcessing = false;
              }
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
              this.actions = snapshot.actions;
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
//# sourceMappingURL=data:application/json;base64,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