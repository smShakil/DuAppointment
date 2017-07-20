import React from 'react';
window.$ = window.jQuery = require('jquery');
import 'semantic-ui-calendar/dist/calendar.min.js';

export default class EventsNews extends React.Component{

  componentDidMount(){
    $('#eventDate').calendar({
      onChange: function (date, text, mode) {
        console.log(text)
      }
    });
  }

  render(){
    return(
      <div className="ui two cards">
        <div className="card">
          <div className="extra content">
            <p style={{textTransform: 'uppercase'}}>Create an Event</p>
          </div>
          <div className="content">
            <div className="ui form">
              <div className="field">
                <label>Event's Name</label>
                <input type="text" placeholder="Event's Name"/>
              </div>
              <div className="field">
                <label>Event's Date &amp; Time</label>
                <div className="ui calendar" id="eventDate">
                  <div className="ui input left icon">
                    <i className="calendar icon"></i>
                    <input type="text" placeholder="Event's Date &amp; Time"/>
                  </div>
                </div>
              </div>
              <div className="field">
                <label>Event's Place</label>
                <input type="text" placeholder="Event's Place"/>
              </div>
              <div className="field">
                <label>Special Offer</label>
                <input type="text" placeholder="Special Offer"/>
              </div>
              <div className="field">
                <label>Event's Details</label>
                <textarea rows="2" style={{resize:'none'}} placeholder="Write Event Details"></textarea>
              </div>
            </div>
          </div>
          <div className="extra content">
            <button className="ui small right floated teal button">Create</button>
            <button className="ui small right floated button">Cancel</button>
          </div>
        </div>

        <div className="card">
          <div className="extra content">
            <p style={{textTransform: 'uppercase'}}>Create a News</p>
          </div>
          <div className="content">
            <div className="ui form">
              <div className="field">
                <label>News Title</label>
                <input type="text" placeholder="News Title"/>
              </div>
              <div className="field">
                <label>News Body</label>
                <textarea rows="8" style={{resize:'none'}} placeholder="Write News Body"></textarea>
              </div>
            </div>
          </div>
          <div className="extra content">
            <button className="ui small right floated teal button">Create</button>
            <button className="ui small right floated button">Cancel</button>
          </div>
        </div>
      </div>
    )
  }
}
