import React, { Component } from 'react';
import Login from '../Login/Login';

const Authenticate = App =>
      class extends Component {
        constructor() {
          super();

          this.state = {
            loggedIn: false
          }
        }
        checkLogin = (username, password) => {
          // need to set up localStorage to save username/password
          return this.setState({
            loggedIn: true
          })
        }
        render() {
          return this.state.loggedIn ? <App /> : <Login checkCombo={this.checkLogin}/>;
        }
      }

export default Authenticate;
