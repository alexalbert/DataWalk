import { transient, inject } from 'aurelia-framework';

@transient()
export class SparqlNobels {

  withWiki = false;

  set showWiki(showWiki) {
    this.withWiki = showWiki;
  }

  query(filter, withWiki) {
    let WIKI_CLAUSE = this.withWiki ? ` SERVICE <http://dbpedia.org/sparql?default-graph-uri=http://dbpedia.org>
      {
        ?wklink foaf:isPrimaryTopicOf ?Wiki .
      }` : "";

    return `SELECT DISTINCT ?Name ?Category ?Year ?Country ?Wiki WHERE {
      ?p rdfs:label ?Name .
      ?p rdf:type nobel:Laureate .
      ?p nobel:nobelPrize ? ?np .
      ?np nobel:year ?Year .
      ?p dbpedia-owl:birthPlace ?placeOfBirth .
      ?placeOfBirth rdf:type dbpedia-owl:Country .
      ?placeOfBirth rdfs:label ?Country .
      ?np nobel:category ?npcategory .
      ?npcategory rdfs:label ?Category .
      ?p owl:sameAs ?wklink .
      FILTER(${filter}) .
      ${WIKI_CLAUSE} 
      }`;
  }

  byYear(year, that) {
    return that.query(`?Year = ${year}`);
  }

  byCountry(country, that) {
    return that.query(`?Country = '${country}'`);
  }

  byCategory(category, that) {
    return that.query(`?Category = '${category}'`);
  }


  ENDPOINT = "http://data.nobelprize.org/sparql";

  PREFIXES = `PREFIX dbpedia-owl: <http://dbpedia.org/ontology/>
  PREFIX nobel: <http://data.nobelprize.org/terms/>
  PREFIX foaf: <http://xmlns.com/foaf/0.1/>
  PREFIX yago: <http://yago-knowledge.org/resource/>
  PREFIX viaf: <http://viaf.org/viaf/>
  PREFIX meta: <http://www4.wiwiss.fu-berlin.de/bizer/d2r-server/metadata#>
  PREFIX dcterms: <http://purl.org/dc/terms/>
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  PREFIX d2r: <http://sites.wiwiss.fu-berlin.de/suhl/bizer/d2r-server/config.rdf#>
  PREFIX dbpedia: <http://dbpedia.org/resource/>
  PREFIX owl: <http://www.w3.org/2002/07/owl#>
  PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
  PREFIX map: <http://data.nobelprize.org/resource/#>
  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX freebase: <http://rdf.freebase.com/ns/>
  PREFIX dbpprop: <http://dbpedia.org/property/>
  PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
  `;

  editResponse(response) {
    return response;
  }

  META = {
    'Search by =>': {
      'Category':
      { target: 'Search by =>', title: 'Nobel laureates in REPLACE_ME', key: 'Category', query: this.byCategory },

      'Year':
      { target: 'Search by =>', title: 'REPLACE_ME Nobel laureates', key: 'Year', query: this.byYear },

      'Country':
      { target: 'Search by =>', title: 'Nobel laureates born in REPLACE_ME', key: 'Country', query: this.byCountry }

    },
  };
}

