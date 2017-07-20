import React from 'react';
import 'daterangepicker';
import Chart from 'chart.js';

export default class Home extends React.Component{
  render(){
    return(
      <div>
        <QuickViewCards/>
        <ScheduleSummary/>
      </div>
    )
  }
}

class QuickViewCards extends React.Component{
  componentDidMount(){
    var moment = require('moment');
    $(function() {

    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
      $('#daterange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }

    $('#daterange').daterangepicker({
      ranges: {
       'Today': [moment(), moment()],
       'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
       'Last 7 Days': [moment().subtract(6, 'days'), moment()],
       'Last 30 Days': [moment().subtract(29, 'days'), moment()],
       'This Month': [moment().startOf('month'), moment().endOf('month')],
       'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      },
      "showCustomRangeLabel": false,
      "autoApply": false,
      "applyClass": 'tealColor',
      "opens": "right",
      showWeekNumbers: false,
      startDate: start,
      endDate: end
      
    }, cb);

    cb(start, end);
    
    });
    
    $('#daterange').on('apply.daterangepicker', function(ev, picker) {
      console.log(picker.startDate.format('YYYY-MM-DD'));
      console.log(picker.endDate.format('YYYY-MM-DD'));
      
    });
  }
  
  render(){
    return(
      <div>
        <div className="ui five doubling raised cards">
          <div className="red card summaryCard">
            <div id="daterange">
              <i className="calendar icon"></i>&nbsp;
              <span></span>
              <i className="caret down icon"></i>
            </div>
          </div>
          <div className="green card summaryCard">
            <p>13</p>
            <span>Appointments</span>
          </div>
          <div className="yellow card summaryCard">
            <p>$10</p>
            <span>Confirmed Revenue</span>
          </div>
          <div className="olive card summaryCard">
            <p>$60</p>
            <span>Projected Revenue</span>
          </div>
          <div className="blue card summaryCard">
            <p>$70</p>
            <span>Total Revenue</span>
          </div>
        </div>
        
      </div>
    )
  }
}

class ScheduleSummary extends React.Component{
  render(){
    return(
      <div className="ui grid">
        <div className="eleven wide stackable column padding2x">
          <div className="ui fluid raised card">
            <div className="extra content">
              <p className="left floated" style={{textTransform: 'uppercase'}}>Schedule Summary</p>
              <a className="right floated ui teal mini button">New Appointment</a>
            </div>
            
            <div className="content">
              <ul className="scheduleSummary">
                <li className="appointmentDate">
                  <p>06</p>
                  <span>Jul</span>
                </li>
                <li className="appointmentTime">
                  <ul className="menuItem">
                    <li><i className="check teal icon"></i></li>
                    <li>
                      <p>08:30 am</p>
                      <span>30 mins</span>
                    </li>
                  </ul>
                </li>
                <li className="appointmentDetail">
                  <p>Mr. Safiuddin Mondol</p>
                  <span>Psychology Consultation with J.M. Linda for $10</span>
                </li>
                <li>
                  <p>Completed</p>
                </li>
              </ul>
              
              <ul className="scheduleSummary">
                <li className="appointmentDate">
                  <p>10</p>
                  <span>Jul</span>
                </li>
                <li className="appointmentTime">
                  <ul className="menuItem">
                    <li><i className="arrow up yellow icon"></i></li>
                    <li>
                      <p>08:30 am</p>
                      <span>30 mins</span>
                    </li>
                  </ul>
                </li>
                <li className="appointmentDetail">
                  <p>Mr. Safiuddin Mondol</p>
                  <span>Psychology Consultation with J.M. Linda for $10</span>
                </li>
                <li>
                  <p>Upcoming</p>
                </li>
              </ul>
              
              <ul className="scheduleSummary">
                <li className="appointmentDate">
                  <p>18</p>
                  <span>Jul</span>
                </li>
                <li className="appointmentTime">
                  <ul className="menuItem">
                    <li><i className="remove red icon"></i></li>
                    <li>
                      <p>08:30 am</p>
                      <span>30 mins</span>
                    </li>
                  </ul>
                </li>
                <li className="appointmentDetail">
                  <p>Mr. Safiuddin Mondol</p>
                  <span>Psychology Consultation with J.M. Linda for $10</span>
                </li>
                <li>
                  <p>Canceled</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="five wide stackable column padding2x">
          <RecentActivity/>
          <AppointmentStat/>
        </div>
      </div>
    )
  }
}

class RecentActivity extends React.Component{
  componentDidMount(){
    $('.recentActivity').niceScroll({
      cursorcolor: 'rgba(39,195,187,0.4)'
    });
  }
  render(){
    return(
      <div className="ui fluid raised card">
        <div className="extra content">
          <p style={{textTransform: 'uppercase'}}>Recent Activity</p>
        </div>

        <div className="content recentActivity">
          <ul className="menuItem">
            <li><i className="smile yellow icon"></i></li>
            <li>
              <p>Customer SM’s contact info has been edited</p>
              <span>30 mins ago</span>
            </li>
          </ul>
          <ul className="menuItem">
            <li><i className="calendar teal icon"></i></li>
            <li>
              <p>New appt. for Sample Service on 20 Jun 2017 @ 08:15 AM with S.M.</p>
              <span>59 mins ago</span>
            </li>
          </ul>
          <ul className="menuItem">
            <li><i className="calendar red icon"></i></li>
            <li>
              <p>Appt. canceled for a Sample Service on 20 Jun 2017 @ 08:15 AM with S.M.</p>
              <span>30 mins ago</span>
            </li>
          </ul>
          <ul className="menuItem">
            <li><i className="calendar teal icon"></i></li>
            <li>
              <p>New appt. for Demo Service on 22 Jun 2017 @ 08:15 AM with Shakil</p>
              <span>59 mins ago</span>
            </li>
          </ul>
          <ul className="menuItem">
            <li><i className="smile yellow icon"></i></li>
            <li>
              <p>Customer SM’s contact info has been edited</p>
              <span>30 mins ago</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

class AppointmentStat extends React.Component{
  componentDidMount(){
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: 'No. Of Appointments',
          data: [2, 9, 3, 15, 12, 13],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)'
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Date'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Appointments'
            },
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
  }
  
  render(){
    return(
      <div className="ui fluid raised card">
        <div className="extra content">
          <p style={{textTransform: 'uppercase'}}>Appointment Statistics</p>
        </div>

        <div className="content">
          <canvas id="myChart" width="400" height="400"></canvas>
        </div>
      </div>
    )
  }
}
