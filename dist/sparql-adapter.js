System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
    'use strict';

    var inject, HttpClient, SparqlAdapter;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }],
        execute: function () {
            SparqlAdapter = (function () {
                function SparqlAdapter(http) {
                    _classCallCheck(this, _SparqlAdapter);

                    this.http = http;
                }

                var _SparqlAdapter = SparqlAdapter;

                _createClass(_SparqlAdapter, [{
                    key: 'setTopic',
                    value: function setTopic(topic) {
                        this.topic = topic;
                    }
                }, {
                    key: 'querySparql',
                    value: function querySparql(searchTerm, entity, action) {
                        var _this = this;

                        var queryFunction = this.topic.META[entity][action].query;
                        var sparqlQuery = queryFunction(this.removeQuotes(searchTerm), this.topic);
                        var queryUrl = this.topic.ENDPOINT + '?query=' + this.topic.PREFIXES + sparqlQuery;

                        queryUrl = this.encode(queryUrl);
                        queryUrl = queryUrl + '&output=json';
                        console.log(queryUrl);

                        return this.http.jsonp(queryUrl, 'callback').then(function (resp) {
                            var results = _this.topic.editResponse(resp.content.results);

                            var data = results.bindings.map(function (row) {
                                return Object.keys(row).map(function (key) {
                                    return { 'name': key, 'type': row[key].type, 'value': row[key].value };
                                });
                            });

                            console.log(data);

                            return data;
                        }, function (err) {
                            console.log(err);
                            return null;
                        });
                    }
                }, {
                    key: 'encode',
                    value: function encode(str) {
                        return str.replace(/#/g, '%23').replace(/&/g, '%26').replace(/ /g, '+');
                    }
                }, {
                    key: 'removeQuotes',
                    value: function removeQuotes(str) {
                        return str.replace(/'/g, '');
                    }
                }]);

                SparqlAdapter = inject(HttpClient)(SparqlAdapter) || SparqlAdapter;
                return SparqlAdapter;
            })();

            _export('SparqlAdapter', SparqlAdapter);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,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