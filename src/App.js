import React, { Component } from "react";
import MyTable from "./MyTable.js";
import Form from "./Form";
import OtherForm from "./OtherForm";
import AlertsTable from "./AlertsTable";
import ArticlesTable from "./ArticlesTable";
import EventsTable from "./EventsTable";
import "./App.css";


class App extends Component{
    
    state = {
        //Form fields
        fields: {},
        //parks data from the fields API call
        data: [],
        //Alerts data from the fields API call
        alertsData: [],
        articlesData: [],
        eventsData:[],
        parkStateCode: {},
    };

    onSubmit = fields => {
        this.setState({ fields });
        
        //Update Table with the Fields We Just Got
        let baseUrl = 'https://developer.nps.gov/api/v1/parks?';
        let api_key = '&api_key=52wv1KfR6OcLfwOlqCepI3nwHIcsNfAyZchqFUtV';
        let parkCode = '';
        if(typeof fields.code !== "undefined") {
            parkCode = 'parkCode=' + fields.code;
        }   
        let stateCode = '&stateCode=' + fields.states;
        let searchTerm = '&q=' + fields.keyword;
        let finishedUrl = baseUrl + parkCode + stateCode + searchTerm + api_key
                
        var parkData = [];
        var request = new XMLHttpRequest(),
        method = 'GET',
        url = finishedUrl;
        request.open(method, url, false)
            request.onload = function() {
            // Begin accessing JSON data here
            var data = JSON.parse(this.response)
            parkData = data;
        }
        request.send() 
        
        this.setState({data: parkData});
        this.forceUpdate();
    };
    
    onSubmit2 = description => {
        this.setState({parkStateCode: description});
        console.log('description', description)
        //Takes the data from the form then makes the API calls using that data
        
        let api_key = '&api_key=52wv1KfR6OcLfwOlqCepI3nwHIcsNfAyZchqFUtV';
        let parkCode = '';
        let stateCode = '&stateCode=' + description.stateCode;
        
        let alertsUrl = 'https://developer.nps.gov/api/v1/alerts?';
        let eventsUrl = 'https://developer.nps.gov/api/v1/events?';
        let articlesUrl = 'https://developer.nps.gov/api/v1/articles?';
            
        if (typeof description.parkCode !== "undefined"){
            let parkCode = 'parkCode=' + description.parkCode;
        }
        if (typeof description.stateCode !== "undefined"){
            let stateCode = 'stateCode=' + description.stateCode;
        }
        
        //Alerts
        let finishedAlertsUrl = alertsUrl + parkCode + stateCode + api_key;
        var alerts = [];
        var alertsRequest = new XMLHttpRequest(),
        method = 'GET',
        url = finishedAlertsUrl;
        alertsRequest.open(method, url, false)
            alertsRequest.onload = function() {
            // Begin accessing JSON data here
            var data = JSON.parse(this.response)
            alerts = data;
        }
        alertsRequest.send()
        this.setState({alertsData: alerts})
        
        //Articles
        let finishedArtUrl = articlesUrl + parkCode + stateCode + api_key;
        var art = [];
        var artRequest = new XMLHttpRequest(),
        method = 'GET',
        url = finishedArtUrl;
        artRequest.open(method, url, false)
            artRequest.onload = function(){
                var data = JSON.parse(this.response)
                art = data;
            }
        artRequest.send();
        this.setState({articlesData: art});
        
        //Events
        let finishedEventsUrl = eventsUrl + parkCode + stateCode + api_key;
        var events = [];
        var eventsRequest = new XMLHttpRequest(),
        method = 'GET',
        url = finishedEventsUrl;
        eventsRequest.open(method, url, false)
            eventsRequest.onload = function(){
                var data = JSON.parse(this.response)
                events = data;

            }
        eventsRequest.send();
        this.setState({eventsData: events});
        
        this.forceUpdate();
        
        
    }
    
    
    
    render() {
        return (
            //Works by rendering each of the forms then the table
            
            <div className="App">
            <h1> National Park Service Information Kiosk </h1>
                <p>Park Search</p>
                <Form onSubmit={fields => this.onSubmit(fields)} />
                <p>Details Search</p>
                <OtherForm onSubmit={description => this.onSubmit2(description)} />
                <p><br />Park Information</p>
                <MyTable data={ this.state.data.data } />
                <p> Alerts </p>
                <AlertsTable data = {this.state.alertsData.data} />
                <p>Articles</p>
                <ArticlesTable data = {this.state.articlesData.data}/>
                <p>Events</p>
                <EventsTable data = {this.state.eventsData.data} />
            </div>
        );
    }
}

export default App;