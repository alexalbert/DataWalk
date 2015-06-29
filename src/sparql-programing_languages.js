 /**
 * Created by Alex on 6/9/2015.
 */

export class SparqlProgramingLanguages {

  constructor(){
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
    var edited =  str.replace(/\(programming language\)/g, "");
    return JSON.parse(edited);
  }

  ENDPOINT = "http://dbpedia.org/sparql";

  PREFIXES =
   `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX dbpedia-owl: <http://dbpedia.org/ontology/>
    PREFIX foaf:  <http://xmlns.com/foaf/0.1/>`;

  /**
   *  Map describing entitites and their relationship. One element is
   *  Entity : [array of related entities and functions to retrieve them given current entity]
   */
  // META = {
  //   'Language' : {'Influenced by': this.influencedBy, 'Influenced': this.influenced},
  //   'Influenced by' : {'Influenced by': this.influencedBy, 'Influenced': this.influenced},
  //   'Influenced' : {'Influenced by': this.influencedBy, 'Influenced': this.influenced}
  // };

  /**
   The model is :
   source_entity  : { relationship_type_1: [target_entity_1, function_1], 
                    relationship_type_2: [target_entity_2, function_2]
                    ... 
                  }
   ...                  
  **/

  META = {
    'Language' : { 
      'Influenced by': { target: 'Language', title: 'Languages influenced by ${key}', query: this.influencedBy },
      'Influenced': { target: 'Language', title: '${key} is influenced by', query: this.influencedBy }
    }
  };
}