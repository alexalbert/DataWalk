System.register([], function (_export) {
  'use strict';

  var SparqlMovies;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      SparqlMovies = (function () {
        function SparqlMovies() {
          _classCallCheck(this, SparqlMovies);

          this.ENDPOINT = 'http://dbpedia.org/sparql';
          this.PREFIXES = 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n    PREFIX foaf:  <http://xmlns.com/foaf/0.1/>\n    PREFIX owl: <http://www.w3.org/2002/07/owl#>\n    PREFIX rr: <http://www.w3.org/ns/r2rml#>\n    PREFIX dbpedia: <http://dbpedia.org/resource/>\n    PREFIX dbpedia-owl: <http://dbpedia.org/ontology/>\n    PREFIX db: <http://dbpedia.org/>\n    PREFIX dbp: <http://dbpedia.org/property/>\n  ';
          this.META = {
            'Director': {
              'Films': { target: 'Film', title: 'Films of ${key}', query: this.filmsOfDirector }
            },
            'Actor': {
              'Films': { target: 'Film', title: 'Films of ${key}', query: this.filmsOfActor }
            },
            'Film': {
              'Actors': { target: 'Actor', title: 'Actors in ${key}', query: this.actorsOfFilm },
              'Director': { target: 'Director', title: 'Director of ${key}', query: this.directorsOfFilm }
            }
          };
        }

        _createClass(SparqlMovies, [{
          key: 'filmsOfDirector',
          value: function filmsOfDirector(name) {
            var names = name.split(',');
            if (names.length === 1) {
              names.unshift('');
            }
            var firstName = encodeURI(names[0]);
            var lastName = encodeURI(names[1]);

            return 'SELECT DISTINCT ?Film  ?Wiki WHERE {\n    ?f rdf:type dbpedia-owl:Film .\n    ?f dbpedia-owl:director ?director .\n    ?f  rdfs:label ?Film .\n    ?f foaf:isPrimaryTopicOf ?Wiki .\n    ?director a dbpedia-owl:Person .\n    ?director rdfs:label ?name .\n    ?name   bif:contains  \'"' + lastName + '"\' .\n    FILTER (langMatches(lang(?Film), "EN")\n     &&  regex(str(?name), "^' + firstName + '.*", \'i\')).\n    }';
          }
        }, {
          key: 'filmsOfActor',
          value: function filmsOfActor(name) {
            var names = name.split(',');
            if (names.length === 1) {
              names.unshift('');
            }
            var firstName = encodeURI(names[0]);
            var lastName = encodeURI(names[1]);

            return 'SELECT DISTINCT ?Film  ?Wiki WHERE {\n    ?f rdf:type dbpedia-owl:Film .\n    ?f dbpedia-owl:starring ?actor .\n    ?f  rdfs:label ?Film .\n    ?f foaf:isPrimaryTopicOf ?Wiki .\n    ?actor a dbpedia-owl:Person .\n    ?actor rdfs:label ?name .\n    ?name   bif:contains  \'"' + lastName + '"\' .\n    FILTER (langMatches(lang(?Film), "EN")\n     &&  regex(str(?name), "^' + firstName + '", \'i\')\n     && !regex(str(?name), ".*,.*")) .\n    }';
          }
        }, {
          key: 'actorsOfFilm',
          value: function actorsOfFilm(film) {

            return 'SELECT DISTINCT ?Actor ?Wiki WHERE {\n    ?f rdf:type dbpedia-owl:Film .\n    ?f  rdfs:label ?Film .\n\t  ?f  dbp:starring ?a .\n    ?a rdfs:label ?Actor .\n    ?a foaf:isPrimaryTopicOf ?Wiki .\n    ?Film bif:contains  \'"' + film + '"\' .\n    FILTER (langMatches(lang(?Actor), "EN")) .\n    }';
          }
        }, {
          key: 'directorsOfFilm',
          value: function directorsOfFilm(film) {

            return 'SELECT DISTINCT ?Director ?Wiki   WHERE {\n    ?f rdf:type dbpedia-owl:Film .\n    ?f  rdfs:label ?Film .\n    ?Film bif:contains  \'"' + film + '"\' .\n    ?f dbpedia-owl:director ?d .\n    ?d rdfs:label ?Director .\n    ?d foaf:isPrimaryTopicOf ?Wiki .\n    FILTER (langMatches(lang(?Director), "EN")) .\n    }';
          }
        }, {
          key: 'editResponse',
          value: function editResponse(response) {
            return response;
          }
        }]);

        return SparqlMovies;
      })();

      _export('SparqlMovies', SparqlMovies);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwYXJxbC1tb3ZpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQWEsWUFBWTs7Ozs7Ozs7O0FBQVosa0JBQVk7aUJBQVosWUFBWTtnQ0FBWixZQUFZOztlQXNFdkIsUUFBUSxHQUFHLDJCQUEyQjtlQUV0QyxRQUFRO2VBZVIsSUFBSSxHQUFHO0FBQ0wsc0JBQVUsRUFBRTtBQUNKLHFCQUFPLEVBQ1AsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRTthQUM1RTtBQUNMLG1CQUFPLEVBQUU7QUFDRCxxQkFBTyxFQUNQLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUU7YUFDekU7QUFDTCxrQkFBTSxFQUFFO0FBQ0Esc0JBQVEsRUFDUixFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQ3hFLHdCQUFVLEVBQ1YsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRTthQUNuRjtXQUNOOzs7cUJBdEdVLFlBQVk7O2lCQUNSLHlCQUFDLElBQUksRUFBRTtBQUNwQixnQkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1QixnQkFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUN0QixtQkFBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNuQjtBQUNELGdCQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEMsZ0JBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFbkMsa1RBTzBCLFFBQVEsd0ZBRVAsU0FBUywwQkFDakM7V0FDSjs7O2lCQUVXLHNCQUFDLElBQUksRUFBRTtBQUNqQixnQkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1QixnQkFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUN0QixtQkFBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNuQjtBQUNELGdCQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEMsZ0JBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFbkMseVNBTzBCLFFBQVEsd0ZBRVAsU0FBUyw4REFFakM7V0FDSjs7O2lCQUVXLHNCQUFDLElBQUksRUFBRTs7QUFFakIsc1BBTXdCLElBQUksa0VBRXpCO1dBQ0o7OztpQkFFYyx5QkFBQyxJQUFJLEVBQUU7O0FBRXBCLDhKQUd3QixJQUFJLDRLQUt6QjtXQUNKOzs7aUJBZVcsc0JBQUMsUUFBUSxFQUFFO0FBQ3JCLG1CQUFPLFFBQVEsQ0FBQztXQUNqQjs7O2VBckZVLFlBQVk7Ozs4QkFBWixZQUFZIiwiZmlsZSI6InNwYXJxbC1tb3ZpZXMuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9