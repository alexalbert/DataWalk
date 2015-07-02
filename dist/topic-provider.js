System.register(['aurelia-framework', './sparql-movies', './sparql-programing_languages', './sparql-nobels'], function (_export) {
  'use strict';

  var inject, SparqlMovies, SparqlProgramingLanguages, SparqlNobels, TopicProvider;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_sparqlMovies) {
      SparqlMovies = _sparqlMovies.SparqlMovies;
    }, function (_sparqlPrograming_languages) {
      SparqlProgramingLanguages = _sparqlPrograming_languages.SparqlProgramingLanguages;
    }, function (_sparqlNobels) {
      SparqlNobels = _sparqlNobels.SparqlNobels;
    }],
    execute: function () {
      TopicProvider = (function () {
        function TopicProvider(sparqlMovies, sparqlProgramingLanguages, sparqlNobels1, sparqlNobels2) {
          _classCallCheck(this, _TopicProvider);

          this.sparqlMovies = sparqlMovies;
          this.sparqlProgramingLanguages = sparqlProgramingLanguages;
          sparqlNobels1.showWiki = false;
          this.sparqlNobels = sparqlNobels1;
          sparqlNobels2.showWiki = true;;
          this.sparqlNobelsWiki = sparqlNobels2;
        }

        var _TopicProvider = TopicProvider;

        _createClass(_TopicProvider, [{
          key: 'topics',
          value: function topics() {
            return {
              'Movies': this.sparqlMovies,
              'Programing Languages': this.sparqlProgramingLanguages,
              'Nobel Prizes': this.sparqlNobels,
              'Nobel Prizes (slower)': this.sparqlNobelsWiki
            };
          }
        }]);

        TopicProvider = inject(SparqlMovies, SparqlProgramingLanguages, SparqlNobels, SparqlNobels)(TopicProvider) || TopicProvider;
        return TopicProvider;
      })();

      _export('TopicProvider', TopicProvider);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGljLXByb3ZpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztxRUFNYSxhQUFhOzs7Ozs7OztpQ0FObEIsTUFBTTs7bUNBQ04sWUFBWTs7OERBQ1oseUJBQXlCOzttQ0FDekIsWUFBWTs7O0FBR1AsbUJBQWE7QUFFYixpQkFGQSxhQUFhLENBRVosWUFBWSxFQUFFLHlCQUF5QixFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUM7OztBQUNoRixjQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztBQUNqQyxjQUFJLENBQUMseUJBQXlCLEdBQUcseUJBQXlCLENBQUM7QUFDM0QsdUJBQWEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQy9CLGNBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDO0FBQ2xDLHVCQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQy9CLGNBQUksQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLENBQUM7U0FDdkM7OzZCQVRVLGFBQWE7Ozs7aUJBVWxCLGtCQUFHO0FBQ1AsbUJBQU07QUFDSixzQkFBUSxFQUFFLElBQUksQ0FBQyxZQUFZO0FBQzNCLG9DQUFzQixFQUFFLElBQUksQ0FBQyx5QkFBeUI7QUFDdEQsNEJBQWMsRUFBRSxJQUFJLENBQUMsWUFBWTtBQUNqQyxxQ0FBdUIsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO2FBQy9DLENBQUM7V0FDSDs7O0FBakJVLHFCQUFhLEdBRHpCLE1BQU0sQ0FBQyxZQUFZLEVBQUUseUJBQXlCLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUMvRCxhQUFhLEtBQWIsYUFBYTtlQUFiLGFBQWE7OzsrQkFBYixhQUFhIiwiZmlsZSI6InRvcGljLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==