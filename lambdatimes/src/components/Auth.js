import React from 'react';
import Login from './Login.js';

const Auth = Monkey =>
class extends React.Component {
  constructor(props){
      super();
      this.state ={
        loggedIn: localStorage.getItem('loggedIn')
      };
    }

  componentDidMount() {
    if(localStorage.getItem('username')){
      this.setState({loggedIn: true,})
      localStorage.setItem('loggedIn', true
      )
    }
  }

  render(){
      if (this.state.loggedIn === true) {
        return <Monkey />
      } else {
        return <Login />
      }
  }
}

export default Auth;
