import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';

@inject(HttpClient)
export class SparqlAdapter {
    http;
    topic;

    constructor(http) {
        this.http = http;
    }

    setTopic(topic) {
        this.topic = topic;
    }

    querySparql(searchTerm, entity, action) {
        let queryFunction = this.topic.META[entity][action].query;
        let sparqlQuery = queryFunction(this.removeQuotes(searchTerm), this.topic);
        let queryUrl = `${this.topic.ENDPOINT}?query=${this.topic.PREFIXES}${sparqlQuery}`;

        queryUrl = this.encode(queryUrl);
        queryUrl = queryUrl + "&output=json";
        console.log(queryUrl);

        return this.http.jsonp(queryUrl, 'callback')
            .then(resp => {
            const results = this.topic.editResponse(resp.content.results);

            const data = results.bindings.map(row => {        // Map rows
                return Object.keys(row).map(key => {          // Map fields of a row
                    return { 'name': key, 'type': row[key].type, 'value': row[key].value };
                });
            });

            console.log(data);

            return data;
        }, err => {
                console.log(err);
                return null;
            });
    }

    // Encode some characters to make SPARQL happy
    encode(str) {
        return str.replace(/#/g, "%23").
            replace(/&/g, "%26").
            replace(/ /g, "+");
    }

    // Remove  quotes as they break enclosing quotes in resulting query
    removeQuotes(str) {
        return str.replace(/'/g, "")
    }
}