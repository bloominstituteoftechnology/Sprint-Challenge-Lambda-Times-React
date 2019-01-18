import React from 'react';
import PropTypes from 'prop-types';
import Login from '../Login';

const Authenticate = App =>
  class extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        loggedIn: false,
      };
    };

    componentDidMount(){
      if (!localStorage.getItem('user')){
        this.setState({loggedIn: false});
      } else {
        this.setState({loggedIn: true });
      }
    }

    render(){
      if (this.state.loggedIn) return <App />;
      return <Login />;
    }
  }

  Authenticate.propTypes = {
    App: PropTypes.func.isRequired
  }

  export default Authenticate;