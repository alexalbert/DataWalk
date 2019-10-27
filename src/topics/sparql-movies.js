export class SparqlMovies {
  
  get description() {
    return 'Source: wiki.dbpedia.org.';
  }

  filmsOfDirector(name) {
    let names = name.split(',');
    if (names.length === 1) {
      names.unshift('');
    }
    let firstName = encodeURI(names[0]);
    let lastName = encodeURI(names[1]);

    return `SELECT DISTINCT ?Film  ?Wiki WHERE {
    ?f rdf:type dbpedia-owl:Film .
    ?f dbpedia-owl:director ?director .
    ?f  rdfs:label ?Film .
    ?f foaf:isPrimaryTopicOf ?Wiki .
    ?director a dbpedia-owl:Person .
    ?director rdfs:label ?name .
    ?name   bif:contains  '"${lastName}"' .
    FILTER (langMatches(lang(?Film), "EN")
     &&  regex(str(?name), "^${firstName}.*", 'i')).
    }`;
  }

  filmsOfActor(name) {
    let names = name.split(',');
    if (names.length === 1) {
      names.unshift('');
    }
    let firstName = encodeURI(names[0]);
    let lastName = encodeURI(names[1]);

    return `SELECT DISTINCT ?Film  ?Wiki WHERE {
    ?f rdf:type dbpedia-owl:Film .
    ?f dbpedia-owl:starring ?actor .
    ?f  rdfs:label ?Film .
    ?f foaf:isPrimaryTopicOf ?Wiki .
    ?actor a dbpedia-owl:Person .
    ?actor rdfs:label ?name .
    ?name   bif:contains  '"${lastName}"' .
    FILTER (langMatches(lang(?Film), "EN")
     &&  regex(str(?name), "^${firstName}", 'i')
     && !regex(str(?name), ".*,.*")) .
    }`;
  }

  actorsOfFilm(film) {

    return `SELECT DISTINCT ?Actor ?Wiki WHERE {
    ?f rdf:type dbpedia-owl:Film .
    ?f  rdfs:label ?Film .
	  ?f  dbo:starring ?a .
    ?a rdfs:label ?Actor .
    ?a foaf:isPrimaryTopicOf ?Wiki .
    ?Film bif:contains  '"${film}"' .
    FILTER (langMatches(lang(?Actor), "EN")) .
    }`;
  }

  directorsOfFilm(film) {

    return `SELECT DISTINCT ?Director ?Wiki   WHERE {
    ?f rdf:type dbpedia-owl:Film .
    ?f  rdfs:label ?Film .
    ?Film bif:contains  '"${film}"' .
    ?f dbpedia-owl:director ?d .
    ?d rdfs:label ?Director .
    ?d foaf:isPrimaryTopicOf ?Wiki .
    FILTER (langMatches(lang(?Director), "EN")) .
    }`;
  }

  ENDPOINT = "http://dbpedia.org/sparql";

  PREFIXES = `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX foaf:  <http://xmlns.com/foaf/0.1/>
    PREFIX owl: <http://www.w3.org/2002/07/owl#>
    PREFIX rr: <http://www.w3.org/ns/r2rml#>
    PREFIX dbpedia: <http://dbpedia.org/resource/>
    PREFIX dbpedia-owl: <http://dbpedia.org/ontology/>
    PREFIX db: <http://dbpedia.org/>
    PREFIX dbp: <http://dbpedia.org/property/>
  `;

  editResponse(response) {
    return response;
  }

  META = {
    'Director': {
            'Films':
            { target: 'Film', title: 'Films of REPLACE_ME', query: this.filmsOfDirector }
        },
    'Actor': {
            'Films':
            { target: 'Film', title: 'Films of REPLACE_ME', query: this.filmsOfActor },
        },
    'Film': {
            'Actors':
            { target: 'Actor', title: 'Actors in REPLACE_ME', query: this.actorsOfFilm },
            'Director':
            { target: 'Director', title: 'Director of REPLACE_ME', query: this.directorsOfFilm }
        }
  };
}
