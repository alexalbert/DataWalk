import { inject } from 'aurelia-framework';
import { activationStrategy } from 'aurelia-router';
import { computedFrom } from 'aurelia-framework';
import { TopicProvider } from './topic-provider' ;
import { SparqlAdapter } from './sparql-adapter' ;


@inject(TopicProvider, SparqlAdapter)
export class Sparql {

  searchTerm;
  resolvedSearchTerm;
  entities;
  currentRadio;
  currentEntity;
  action;
  title;
  sparqlAdapter;
  wasProcessing;
  isProcessing;
  data;
  firstRow;
  title;

  history = [];
  lastMoveForward = false;

  constructor(topicProvider, sparqlAdapter) {
    this.topicProvider = topicProvider;
    this.sparqlAdapter = sparqlAdapter;
  }

 activate(params, routeConfig) {
    this.topic = this.topicProvider.topics()[routeConfig.title];
    this.sparqlAdapter.setTopic(this.topic);
    this.entities = this.getEntities();
    this.currentRadio = this.entities[0];
    this.currentEntity = this.entities[0];
    this.wasProcessing = false;
    this.isProcessing = false;
  }

  attached() {
    $.material.init();
  }

  getEntities() {
    return Object.keys(this.topic.META);
  }

  determineActivationStrategy() {
    return activationStrategy.replace;
  }

  @computedFrom('currentRadio')
  get searchActions() {
    return Object.keys(this.topic.META[this.currentRadio]);
  }

  @computedFrom('currentEntity')
  get tableActions() {
    return Object.keys(this.topic.META[this.currentEntity]);
  }

  sendInitialQuery(action) {
    return this.sendQuery(this.currentRadio, action, this.searchTerm);
  }

  sendTableQuery(action, currentRow) {
    let key = this.topic.META[this.currentEntity][action].key;
    let searchTerm;
    if (key) {
      searchTerm = 
      currentRow.filter(f => {return (f.name === key)} )[0].value;
      // searchTerm = currentRow[key].value;
    } else {
      searchTerm = currentRow[0].value;
    }
    return this.sendQuery(this.currentEntity, action, searchTerm);
  }

  sendQuery(entity, action, searchTerm) {
    if (!searchTerm) return;
    
    this.wasProcessing = true;
    this.isProcessing = true;

    this.currentAction = action;
    
    let that = this;
    return this.sparqlAdapter.querySparql(searchTerm, entity, this.currentAction).
      then(resp => {
            if (resp) {
                that.data = resp;
                that.firstRow = that.data[0];
                that.resolvedSearchTerm = searchTerm;
                
                let context = this.topic.META[this.currentEntity][this.currentAction];
                that.title = context.title.replace(/REPLACE_ME/, searchTerm);
                this.currentEntity = context.target;

                that.searchTerm = null;
                that.isProcessing = false;
                                         
                that.lastMoveForward = true;
                that.history.push({ 'data': that.data, 
                    'actions': that.actions })

            }
        });
  }

  back() {
    if (this.lastMoveForward) {
      // Drop last frame
      this.history.pop();
      this.lastMoveForward = false;
    }

    const snapshot = this.history.slice(-1)[0];
    if (snapshot !== undefined) {
      this.actions = snapshot.actions;
      this.data = snapshot.data;
    }
  }
}