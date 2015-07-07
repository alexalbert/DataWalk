System.register([], function (_export) {
  "use strict";

  var SparqlProgramingLanguages;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      SparqlProgramingLanguages = (function () {
        function SparqlProgramingLanguages() {
          _classCallCheck(this, SparqlProgramingLanguages);

          this.ENDPOINT = "http://dbpedia.org/sparql";
          this.PREFIXES = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n    PREFIX dbpedia-owl: <http://dbpedia.org/ontology/>\n    PREFIX foaf:  <http://xmlns.com/foaf/0.1/>";
          this.META = {
            "Language": {
              "Influenced by": { target: "Language", title: "Languages influenced by REPLACE_ME", query: this.influencedBy },
              "Influenced": { target: "Language", title: "REPLACE_ME is influenced by", query: this.influencedBy }
            }
          };
        }

        _createClass(SparqlProgramingLanguages, [{
          key: "influencedBy",
          value: function influencedBy(language) {
            return "SELECT DISTINCT ?Language ?Wiki WHERE {\n      ?l rdf:type dbpedia-owl:ProgrammingLanguage .\n      ?l rdfs:label ?name .\n      ?name bif:contains '\"" + language + "\"' .\n      ?l dbpedia-owl:influencedBy ?influencer .\n      ?influencer rdfs:label ?Language .\n      ?influencer foaf:isPrimaryTopicOf ?Wiki .\n      FILTER (langMatches(lang(?Language), \"EN\")  ).\n    }";
          }
        }, {
          key: "influenced",
          value: function influenced(language) {
            return "SELECT DISTINCT ?Language ?Wiki WHERE {\n      ?l rdf:type dbpedia-owl:ProgrammingLanguage .\n      ?l rdfs:label ?name .\n      ?name bif:contains '\"" + language + "\"' .\n      ?l dbpedia-owl:influenced ?influencee .\n      ?influencee rdfs:label ?Language .\n      ?influencee foaf:isPrimaryTopicOf ?Wiki .\n      FILTER (langMatches(lang(?Language), \"EN\")  ).\n    }";
          }
        }, {
          key: "editResponse",
          value: function editResponse(json) {
            var str = JSON.stringify(json);
            var edited = str.replace(/\(programming language\)/g, "");
            return JSON.parse(edited);
          }
        }, {
          key: "description",
          get: function get() {
            return "Source: wiki.dbpedia.org.";
          }
        }]);

        return SparqlProgramingLanguages;
      })();

      _export("SparqlProgramingLanguages", SparqlProgramingLanguages);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwYXJxbC1wcm9ncmFtaW5nX2xhbmd1YWdlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSx5QkFBeUI7Ozs7Ozs7OztBQUF6QiwrQkFBeUI7aUJBQXpCLHlCQUF5QjtnQ0FBekIseUJBQXlCOztlQW9DcEMsUUFBUSxHQUFHLDJCQUEyQjtlQUV0QyxRQUFRO2VBZ0JSLElBQUksR0FBRztBQUNMLHNCQUFVLEVBQUU7QUFDViw2QkFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsb0NBQW9DLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUU7QUFDOUcsMEJBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLDZCQUE2QixFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFO2FBQ3JHO1dBQ0Y7OztxQkEzRFUseUJBQXlCOztpQkFNeEIsc0JBQUMsUUFBUSxFQUFFO0FBQ3JCLCtLQUd5QixRQUFRLHNOQUs5QjtXQUNKOzs7aUJBRVMsb0JBQUMsUUFBUSxFQUFFO0FBQ25CLCtLQUd5QixRQUFRLG9OQUs5QjtXQUNKOzs7aUJBRVcsc0JBQUMsSUFBSSxFQUFFO0FBQ2pCLGdCQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9CLGdCQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLDJCQUEyQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzFELG1CQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7V0FDM0I7OztlQWhDYyxlQUFHO0FBQ2hCLG1CQUFPLDJCQUEyQixDQUFDO1dBQ3BDOzs7ZUFKVSx5QkFBeUI7OzsyQ0FBekIseUJBQXlCIiwiZmlsZSI6InNwYXJxbC1wcm9ncmFtaW5nX2xhbmd1YWdlcy5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=