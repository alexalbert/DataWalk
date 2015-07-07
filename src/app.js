import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import {inject} from 'aurelia-framework';
import {TopicProvider} from './topic-provider' ;

@inject(TopicProvider)
export class App {

  constructor(topicProvider){
    this.topicProvider = topicProvider;
  }
   
  configureRouter(config, router){
    config.title = 'Data Walk';

    var map = [];

    var topics = Object.keys(this.topicProvider.topics());

     for (let i = 0; i < topics.length; i++) {
       var topic = topics[i];
       map.push({ 
        route:  (i == 0) ? ['', topic] : topic,  
        moduleId: './sparql', 
        nav: true, 
        title: topic });
    }
    
    map.push({route: 'about', moduleId: './about', nav: true, title: 'About'})

    config.map(map);

    this.router = router;
  }
}
