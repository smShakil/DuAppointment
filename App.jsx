import React from 'react';
window.$ = window.jQuery = require('jquery');
require('semantic-ui/dist/semantic.min.js');
import './js/jquery.nicescroll.min.js';
import { Route, Link } from 'react-router-dom';
import Home from './components/home.jsx';
import Appointment from './components/appointment.jsx';
import Customers from './components/customers.jsx';
import EventsNews from './components/eventsNews.jsx';


class App extends React.Component{
  componentDidMount(){
    $('.topBarMenu .ui.dropdown').dropdown({
      action: 'hide'
    });

    $('.navigation').niceScroll({
      cursorcolor: 'rgba(255,255,255,.4)',
      horizrailenabled: false,
      enableobserver: true
    });
    $('body').niceScroll({
      horizrailenabled: false,
      zindex: 9999,
      cursorcolor: 'rgba(0,0,0,.4)'
    });
  }

  render(){
    return(
      <div className="ui grid ">
        <SideBar/>
        <div className="three wide tablet computer only column"></div>
        <div className="sixteen wide mobile thirteen wide tablet thirteen wide computer column ">
          <TopBar/>

          <div className="mainBody">
            <Route exact path='/' component={Home}/>
            <Route path='/appointment' component={Appointment}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/eventsNews' component={EventsNews}/>

          </div>
        </div>
      </div>
    )
  }
}

class SideBar extends React.Component{

  componentDidMount(){
    $('.navigation > li').click(function(){
      $(this).addClass('activeMenu');
      $(this).siblings('li').removeClass('activeMenu');
    })
    $('.activeMenu .dropdownIcon').addClass('rotate180');
    $(".navigation > li > a").click(function(){
      $(this).siblings('.subNavigation').first().stop().slideToggle(function(){
        $(".navigation").getNiceScroll().resize();
      });
      $(this).find('.dropdownIcon').toggleClass('rotate180');
      $('.navigation > li > a .dropdownIcon').not($(this).find('.dropdownIcon')).removeClass('rotate180');
      $('.navigation > li > a ~ .subNavigation').not($(this).siblings('.subNavigation')).stop().slideUp();

    });


  }
  render(){
    return(
      <div className="three wide tablet computer only column sideBar">
        <div className="logoContainer">
          <a href="#">
            <img src="images/logo.png" alt="DuAppointment"/>
          </a>
        </div>
        <ul className="navigation" role="nav">
          <li><Link to="/"><span className="lnr lnr-home"></span>Home</Link></li>
          <li><Link to="/appointment"><span className="lnr lnr-calendar-full"></span>Appointment</Link></li>
          <li><Link to="/customers"><span className="lnr lnr-users"></span>Customers</Link></li>
          <li><Link to="/eventsNews"><span className="lnr lnr-location"></span>Events &amp; News</Link></li>
          <li>
            <a>
              <span className="lnr lnr-file-empty"></span>Report
              <span className="lnr lnr-chevron-down dropdownIcon"></span>
            </a>
            <ul className="subNavigation">
              <li><a href="#" className="activeSubMenu"><i className="calculator icon"></i>Accounting</a></li>
              <li><a href="#"><i className="folder open outline icon"></i>CRM</a></li>
            </ul>
          </li>
          <li>
            <a>
              <span className="lnr lnr-cog"></span>Settings
              <span className="lnr lnr-chevron-down dropdownIcon"></span>
            </a>
            <ul className="subNavigation">
              <li><a href="#"><i className="settings icon"></i>Account</a></li>
              <li><a href="#"><i className="users icon"></i>Staff</a></li>
              <li><a href="#"><i className="emergency icon"></i>Services</a></li>
              <li><a href="#"><i className="alarm outline icon"></i>Notification</a></li>
              <li><a href="#"><i className="file text outline icon"></i>Registration</a></li>
              <li><a href="#"><i className="dollar icon"></i>Payments</a></li>
            </ul>
          </li>
          <li><a href="#"><span className="lnr lnr-chart-bars"></span>Billing</a></li>
        </ul>
      </div>
    )
  }
}

class TopBar extends React.Component{
  render(){
    return(
      <div className="topBar">
        <h2 className="pageTitle">Home</h2>
        <ul className="topBarMenu">
          <li>
            <div className="ui top right pointing dropdown ">
              <div className="text"><span className="lnr lnr-envelope topBarIcon"></span></div>
              <span className="lnr lnr-chevron-down dropdownIcon"></span>
              <div className="floating ui teal circular small label topBarMenuLabel">3</div>
              <div className="menu">
                <div className="item">
                  <ul className="menuItem">
                    <li><i className="mail outline teal icon"></i></li>
                    <li>
                      <p>Mr. Mijanur Rahman</p>
                      <span>1 min ago</span>
                    </li>
                  </ul>
                </div>
                <div className="item">
                  <ul className="menuItem">
                    <li><i className="mail outline grey icon"></i></li>
                    <li>
                      <p>Miss Selina Khatun</p>
                      <span>30 mins ago</span>
                    </li>
                  </ul>
                </div>
                <div className="item">
                  <ul className="menuItem">
                    <li><i className="mail outline grey icon"></i></li>
                    <li>
                      <p>Ojana Kew</p>
                      <span>1 hr ago</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="ui top right pointing dropdown">
              <div className="text"><span className="lnr lnr-alarm topBarIcon"></span></div>
              <span className="lnr lnr-chevron-down dropdownIcon"></span>
              <div className="floating ui teal circular small label topBarMenuLabel">11</div>
              <div className="menu">
                <div className="item">
                  <ul className="menuItem">
                    <li><i className="calendar teal icon"></i></li>
                    <li>
                      <p>New Pending Appointment</p>
                      <span>1 min ago</span>
                    </li>
                  </ul>
                </div>
                <div className="item">
                  <ul className="menuItem">
                    <li><i className="calendar yellow icon"></i></li>
                    <li>
                      <p>Appointment Canceled</p>
                      <span>30 mins ago</span>
                    </li>
                  </ul>
                </div>
                <div className="item">
                  <ul className="menuItem">
                    <li><i className="calendar teal icon"></i></li>
                    <li>
                      <p>New Pending Appointment</p>
                      <span>1 hr ago</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="ui top right pointing dropdown">
              <div className="text"><span className="lnr lnr-user topBarIcon"></span></div>
              <span className="lnr lnr-chevron-down dropdownIcon"></span>
              <div className="menu">
                <div className="item">
                  <ul className="menuItem">
                    <li><i className="options teal icon"></i></li>
                    <li>
                      <p>Account Setting</p>
                      <span>Basic informations</span>
                    </li>
                  </ul>
                </div>
                <div className="item">
                  <ul className="menuItem">
                    <li><i className="hourglass end teal icon"></i></li>
                    <li>
                      <p>Account Plan</p>
                      <span>Update Account</span>
                    </li>
                  </ul>
                </div>
                <div className="ui divider"></div>
                <div className="item">
                  <ul className="menuItem">
                    <li><i className="power red icon"></i></li>
                    <li>
                      <p>Sign Out</p>
                      <span>See you soon !!!</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="clr"></div>
      </div>
    )
  }
}


export default App;
