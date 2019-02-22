import React, { Component } from 'react';

const Authenticate = App => LoginPage =>
  class extends Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
        // I tried having this be a ternary it broke the code, this is why I use es5 before deconstructing to es6
        if(localStorage.getItem('user')){ 
            this.setState({ loggedIn: !this.state.loggedIn })
        }
    }

    render() {
      return (
        this.state.loggedIn
            ? <App />
            : <LoginPage />
        )
    }
  };

export default Authenticate;