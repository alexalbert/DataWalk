System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var transient, inject, SparqlNobels;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [function (_aureliaFramework) {
      transient = _aureliaFramework.transient;
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      SparqlNobels = (function () {
        function SparqlNobels() {
          _classCallCheck(this, _SparqlNobels);

          this.withWiki = false;
          this.ENDPOINT = "http://data.nobelprize.org/sparql";
          this.PREFIXES = "PREFIX dbpedia-owl: <http://dbpedia.org/ontology/>\n  PREFIX nobel: <http://data.nobelprize.org/terms/>\n  PREFIX foaf: <http://xmlns.com/foaf/0.1/>\n  PREFIX yago: <http://yago-knowledge.org/resource/>\n  PREFIX viaf: <http://viaf.org/viaf/>\n  PREFIX meta: <http://www4.wiwiss.fu-berlin.de/bizer/d2r-server/metadata#>\n  PREFIX dcterms: <http://purl.org/dc/terms/>\n  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n  PREFIX d2r: <http://sites.wiwiss.fu-berlin.de/suhl/bizer/d2r-server/config.rdf#>\n  PREFIX dbpedia: <http://dbpedia.org/resource/>\n  PREFIX owl: <http://www.w3.org/2002/07/owl#>\n  PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n  PREFIX map: <http://data.nobelprize.org/resource/#>\n  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n  PREFIX freebase: <http://rdf.freebase.com/ns/>\n  PREFIX dbpprop: <http://dbpedia.org/property/>\n  PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n  ";
          this.META = {
            "Search by =>": {
              "Category": { target: "Search by =>", title: "Nobel laureates in REPLACE_ME", key: "Category", query: this.byCategory },

              "Year": { target: "Search by =>", title: "REPLACE_ME Nobel laureates", key: "Year", query: this.byYear },

              "Country": { target: "Search by =>", title: "Nobel laureates born in REPLACE_ME", key: "Country", query: this.byCountry }

            }
          };
        }

        var _SparqlNobels = SparqlNobels;

        _createClass(_SparqlNobels, [{
          key: "query",
          value: function query(filter, withWiki) {
            var WIKI_CLAUSE = this.withWiki ? " SERVICE <http://dbpedia.org/sparql?default-graph-uri=http://dbpedia.org>\n      {\n        ?wklink foaf:isPrimaryTopicOf ?Wiki .\n      }" : "";

            return "SELECT DISTINCT ?Name ?Category ?Year ?Country ?Wiki WHERE {\n      ?p rdfs:label ?Name .\n      ?p rdf:type nobel:Laureate .\n      ?p nobel:nobelPrize ? ?np .\n      ?np nobel:year ?Year .\n      ?p dbpedia-owl:birthPlace ?placeOfBirth .\n      ?placeOfBirth rdf:type dbpedia-owl:Country .\n      ?placeOfBirth rdfs:label ?Country .\n      ?np nobel:category ?npcategory .\n      ?npcategory rdfs:label ?Category .\n      ?p owl:sameAs ?wklink .\n      FILTER(" + filter + ") .\n      " + WIKI_CLAUSE + " \n      }";
          }
        }, {
          key: "byYear",
          value: function byYear(year, that) {
            return that.query("?Year = " + year);
          }
        }, {
          key: "byCountry",
          value: function byCountry(country, that) {
            return that.query("?Country = '" + country + "'");
          }
        }, {
          key: "byCategory",
          value: function byCategory(category, that) {
            return that.query("?Category = '" + category + "'");
          }
        }, {
          key: "editResponse",
          value: function editResponse(response) {
            return response;
          }
        }, {
          key: "showWiki",
          set: function set(showWiki) {
            this.withWiki = showWiki;
          }
        }]);

        SparqlNobels = transient()(SparqlNobels) || SparqlNobels;
        return SparqlNobels;
      })();

      _export("SparqlNobels", SparqlNobels);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwYXJxbC1ub2JlbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3lCQUdhLFlBQVk7Ozs7Ozs7O29DQUhoQixTQUFTO2lDQUFFLE1BQU07OztBQUdiLGtCQUFZO2lCQUFaLFlBQVk7OztlQUV2QixRQUFRLEdBQUcsS0FBSztlQXlDaEIsUUFBUSxHQUFHLG1DQUFtQztlQUU5QyxRQUFRO2VBdUJSLElBQUksR0FBRztBQUNMLDBCQUFjLEVBQUU7QUFDZCx3QkFBVSxFQUNWLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsK0JBQStCLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRTs7QUFFM0csb0JBQU0sRUFDTixFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLDRCQUE0QixFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUU7O0FBRWhHLHVCQUFTLEVBQ1QsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxvQ0FBb0MsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFOzthQUUvRztXQUNGOzs7NEJBaEZVLFlBQVk7Ozs7aUJBUWxCLGVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRTtBQUN0QixnQkFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsa0pBR3hCLEVBQUUsQ0FBQzs7QUFFVixzZUFXVyxNQUFNLG1CQUNiLFdBQVcsZ0JBQ1Y7V0FDTjs7O2lCQUVLLGdCQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDakIsbUJBQU8sSUFBSSxDQUFDLEtBQUssY0FBWSxJQUFJLENBQUcsQ0FBQztXQUN0Qzs7O2lCQUVRLG1CQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDdkIsbUJBQU8sSUFBSSxDQUFDLEtBQUssa0JBQWdCLE9BQU8sT0FBSSxDQUFDO1dBQzlDOzs7aUJBRVMsb0JBQUMsUUFBUSxFQUFFLElBQUksRUFBRTtBQUN6QixtQkFBTyxJQUFJLENBQUMsS0FBSyxtQkFBaUIsUUFBUSxPQUFJLENBQUM7V0FDaEQ7OztpQkF3Qlcsc0JBQUMsUUFBUSxFQUFFO0FBQ3JCLG1CQUFPLFFBQVEsQ0FBQztXQUNqQjs7O2VBOURXLGFBQUMsUUFBUSxFQUFFO0FBQ3JCLGdCQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztXQUMxQjs7O0FBTlUsb0JBQVksR0FEeEIsU0FBUyxFQUFFLENBQ0MsWUFBWSxLQUFaLFlBQVk7ZUFBWixZQUFZOzs7OEJBQVosWUFBWSIsImZpbGUiOiJzcGFycWwtbm9iZWxzLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==