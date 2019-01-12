import React from 'react';
import App from '../../App';
import Login from './Login/Login';

const Authenticate = Content =>
  class extends React.Component {
    constructor(){
        super();
        this.state = {loggedIn: false}
    }

    componentDidMount(){
      if(!localStorage.getItem('username')){
        this.setState({loggedIn: true});
      }else{
        this.setState({loggedIn: false});
      }
    }
    render() {
      if(this.state.loggedIn) return <Content />;
      return <Login/>
    }
  };

export default Authenticate;