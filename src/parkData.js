import React, { Component } from 'react';

class ParkData extends Component {
    constructor() {
        super();
        this.state = {
            information: [],
        };
    }
}

var request = new XMLHttpRequest()
request.open('GET', 'https://developer.nps.gov/api/v1/visitorcenters?api_key=52wv1KfR6OcLfwOlqCepI3nwHIcsNfAyZchqFUtV', true)
request.onload = function() {
  // Begin accessing JSON data herex
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    var i;
    for (i = 0; i < data.length; i++) { 
        console.log(data[i]);
    }   
    
    data.forEach(park => {
      
    })
  } else {
    
  }
}

request.send()