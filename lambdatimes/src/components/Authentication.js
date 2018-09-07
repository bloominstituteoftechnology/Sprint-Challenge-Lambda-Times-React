import React from 'react';
import Login from './Login'

const Authentication = Component =>
class extends React.Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false
    }
  }

  componentDidMount() {
    this.setState({
      loggedIn: localStorage.length>0
    })

  }

  render() {
    return this.state.loggedIn
    ? <Component />
    : <Login />
  }
};
  export default Authentication
