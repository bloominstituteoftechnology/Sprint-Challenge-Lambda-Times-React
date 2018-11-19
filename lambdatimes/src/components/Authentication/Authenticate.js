import React from 'react';

const Authenticate = App  => (
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
      }
    }

    componentDidMount(){
      const loginInfo = JSON.parse(localStorage.getItem('timesLogin'));
      if (loginInfo && loginInfo.username) {
        this.props.loginHandler();
        this.setState({
          loggedIn: true,
        })
      }
    }


    render () {
      return this.state.loggedIn && <App />
    }
  }
)

export default Authenticate;