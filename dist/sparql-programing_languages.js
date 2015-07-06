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
        }]);

        return SparqlProgramingLanguages;
      })();

      _export("SparqlProgramingLanguages", SparqlProgramingLanguages);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwYXJxbC1wcm9ncmFtaW5nX2xhbmd1YWdlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSx5QkFBeUI7Ozs7Ozs7OztBQUF6QiwrQkFBeUI7QUFFekIsaUJBRkEseUJBQXlCLEdBRXRCO2dDQUZILHlCQUF5Qjs7ZUFtQ3BDLFFBQVEsR0FBRywyQkFBMkI7ZUFFdEMsUUFBUTtlQWdCUixJQUFJLEdBQUc7QUFDTCxzQkFBVSxFQUFFO0FBQ1YsNkJBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLG9DQUFvQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQzlHLDBCQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSw2QkFBNkIsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRTthQUNyRztXQUNGO1NBdkRBOztxQkFIVSx5QkFBeUI7O2lCQUt4QixzQkFBQyxRQUFRLEVBQUU7QUFDckIsK0tBR3lCLFFBQVEsc05BSzlCO1dBQ0o7OztpQkFFUyxvQkFBQyxRQUFRLEVBQUU7QUFDbkIsK0tBR3lCLFFBQVEsb05BSzlCO1dBQ0o7OztpQkFFVyxzQkFBQyxJQUFJLEVBQUU7QUFDakIsZ0JBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0IsZ0JBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsMkJBQTJCLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDMUQsbUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztXQUMzQjs7O2VBakNVLHlCQUF5Qjs7OzJDQUF6Qix5QkFBeUIiLCJmaWxlIjoic3BhcnFsLXByb2dyYW1pbmdfbGFuZ3VhZ2VzLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==