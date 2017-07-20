import React from 'react';
window.$ = window.jQuery = require('jquery');
require('semantic-ui/dist/semantic.min.js');


class Login extends React.Component{
  render(){
    return(
      <div className="loginFullPage">
        <div className="loginPanel">
          <a href="#">
            <img src="./images/loginLogo.png" className="loginLogo"/>
          </a>
          <div className="ui tiny form">
            <div className="field">
              <input type="email" placeholder="Email"/>
            </div>
            <div className="field">
              <input type="password" placeholder="Password"/>
            </div>
          </div>
          <div className="logingActionCon">
            <button className="ui fluid tiny teal button">
              Login
            </button>
            <div className="ui horizontal divider">Or</div>
            <button className="ui fluid tiny facebook button">
              Facebook
            </button>
            <button className="ui fluid tiny google plus button">
              Google Plus
            </button>
            <div className="clr"></div>
          </div>
        </div>
        <div className="forgotPassCon">
          <button className="ui red small button">Forgot Password</button>
          <div className="ui horizontal divider">New User?</div>
          <button className="ui teal small button">Sign Up</button>
        </div>
      </div>
    )
  }
}

export default Login;
