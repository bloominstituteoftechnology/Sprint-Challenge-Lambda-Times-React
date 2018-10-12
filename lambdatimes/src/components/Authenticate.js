import React, {Component} from 'react';
import Login from './Login';

const Authenticate = (Content) => (
  class extends Component {
    state = {
      loggedIn: false,
    }

    componentDidMount() {
      const username = JSON.parse(localStorage.getItem('username')) || {}
      if('username' in username) {
        if(username.username) {
          this.setState({
            loggedIn: true
          })
        }
      } else {
        this.setState({
          loggedIn: false
        })
      }
    }

    render() {
      if(this.state.loggedIn) {
        return <Content />
      } else {
        return <Login />
      }
    }
  }
)

export default Authenticate;