import {inject} from 'aurelia-framework';
import {SparqlMovies} from './topics/sparql-movies' ;
import {SparqlProgramingLanguages} from './topics/sparql-programing_languages' ;
import {SparqlNobels} from './topics/sparql-nobels' ;

@inject(SparqlMovies, SparqlProgramingLanguages, SparqlNobels, SparqlNobels)
export class TopicProvider {

  constructor(sparqlMovies, sparqlProgramingLanguages, sparqlNobels1, sparqlNobels2){
    this.sparqlMovies = sparqlMovies;
    this.sparqlProgramingLanguages = sparqlProgramingLanguages;
    sparqlNobels1.showWiki = false;
    this.sparqlNobels = sparqlNobels1;
    sparqlNobels2.showWiki = true;;
    this.sparqlNobelsWiki = sparqlNobels2;
  }
  topics() {
    return{
      "Movies": this.sparqlMovies,
      "Programing Languages": this.sparqlProgramingLanguages,
      "Nobel Prizes": this.sparqlNobels,
      "Nobel Prizes (slower)": this.sparqlNobelsWiki
    };
  }
}
