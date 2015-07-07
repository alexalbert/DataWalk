export class SparqlProgramingLanguages {

  get description() {
    return 'Source: wiki.dbpedia.org.';
  }

  influencedBy(language) {
    return `SELECT DISTINCT ?Language ?Wiki WHERE {
      ?l rdf:type dbpedia-owl:ProgrammingLanguage .
      ?l rdfs:label ?name .
      ?name bif:contains '"${language}"' .
      ?l dbpedia-owl:influencedBy ?influencer .
      ?influencer rdfs:label ?Language .
      ?influencer foaf:isPrimaryTopicOf ?Wiki .
      FILTER (langMatches(lang(?Language), "EN")  ).
    }`;
  }

  influenced(language) {
    return `SELECT DISTINCT ?Language ?Wiki WHERE {
      ?l rdf:type dbpedia-owl:ProgrammingLanguage .
      ?l rdfs:label ?name .
      ?name bif:contains '"${language}"' .
      ?l dbpedia-owl:influenced ?influencee .
      ?influencee rdfs:label ?Language .
      ?influencee foaf:isPrimaryTopicOf ?Wiki .
      FILTER (langMatches(lang(?Language), "EN")  ).
    }`;
  }

  editResponse(json) {
    var str = JSON.stringify(json);
    var edited = str.replace(/\(programming language\)/g, "");
    return JSON.parse(edited);
  }

  ENDPOINT = "http://dbpedia.org/sparql";

  PREFIXES =
    `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX dbpedia-owl: <http://dbpedia.org/ontology/>
    PREFIX foaf:  <http://xmlns.com/foaf/0.1/>`;


  /**
   The model is :
   source_entity  : { relationship_type_1: [target_entity_1, function_1], 
                    relationship_type_2: [target_entity_2, function_2]
                    ... 
                  }
   ...                  
  **/

  META = {
    'Language': {
      'Influenced by': { target: 'Language', title: 'Languages influenced by REPLACE_ME', query: this.influencedBy },
      'Influenced': { target: 'Language', title: 'REPLACE_ME is influenced by', query: this.influencedBy }
    }
  };
}