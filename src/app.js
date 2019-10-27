import {PLATFORM} from 'aurelia-pal';
import {inject} from 'aurelia-framework';
import {TopicProvider} from './topic-provider';

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
          moduleId: PLATFORM.moduleName('sparql'), 
          nav: true, 
          title: topic });
      }
      
      map.push({route: 'about', moduleId: PLATFORM.moduleName('about'), nav: true, title: 'About'})
  
      config.map(map);
  
      this.router = router;
    }
    // configureRouter(config, router){
    //   config.title = 'Contacts';
    //   config.map([
    //     { route: '',              moduleId: PLATFORM.moduleName('no-selection'),   title: 'Select' },
    //     { route: 'contacts/:id',  moduleId: PLATFORM.moduleName('contact-detail'), name:'contacts' }
    //   ]);
  
    //   this.router = router;
    // }
  }
  






// import 'bootstrap';
// import 'bootstrap/css/bootstrap.css!';
// import {inject} from 'aurelia-framework';
// import {TopicProvider} from './topic-provider' ;

// @inject(TopicProvider)
// export class App {

//   constructor(topicProvider){
//     this.topicProvider = topicProvider;
//   }
   
//   configureRouter(config, router){
//     config.title = 'Data Walk';

//     var map = [];

//     var topics = Object.keys(this.topicProvider.topics());

//      for (let i = 0; i < topics.length; i++) {
//        var topic = topics[i];
//        map.push({ 
//         route:  (i == 0) ? ['', topic] : topic,  
//         moduleId: './sparql', 
//         nav: true, 
//         title: topic });
//     }
    
//     map.push({route: 'about', moduleId: './about', nav: true, title: 'About'})

//     config.map(map);

//     this.router = router;
//   }
// }
