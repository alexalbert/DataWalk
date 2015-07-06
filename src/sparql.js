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
  isMovingBack;
  history;

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
    this.isMovingBack = false;
    this.history = [];
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
                if (that.isMovingBack) {
                  that.history.pop();
                }
                that.isMovingBack = false;
                // Push previous frame to history
                if (that.data) {
                  that.history.push({ data: that.data, actions: that.actions,
                                    title: that.title, firstRow: that.firstRow });
                }
                
                that.data = resp;
                that.firstRow = that.data[0];
                that.resolvedSearchTerm = searchTerm;
                
                let context = this.topic.META[this.currentEntity][this.currentAction];
                that.title = context.title.replace(/REPLACE_ME/, searchTerm);
                this.currentEntity = context.target;

                that.searchTerm = null;
                that.isProcessing = false;
            }
        });
  }

  back() {
    if (this.isMovingBack) {
      // Drop last frame
      this.history.pop();
    }

    this.isMovingBack = true;
   
    const snapshot = this.history.slice(-1)[0];
    if (snapshot !== undefined) {
      this.actions = snapshot.actions;
      this.data = snapshot.data;
      this.title = snapshot.title;
      this.firstRow = snapshot.firstRow;
    }
  }
}