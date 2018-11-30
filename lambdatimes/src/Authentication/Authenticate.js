import React from 'react';

const Authenticate = (App, Login) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: ''
      };
    }

    componentDidMount() {
      localStorage.setItem('username', 'lambda');
      localStorage.setItem('password', '1234');
    }

    loginInput = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    validateUser = e => {
      e.preventDefault();
      const { username, password } = this.state;
      if (
        username === localStorage.getItem('username') &&
        password === localStorage.getItem('password')
      ) {
        this.setState({ username: '', password: '' });
        this.props.login();
      }
    };

    render() {
      return (
        <React.Fragment>
          {this.props.loggedIn ? (
            <App />
          ) : (
            <Login
              loginInput={this.loginInput}
              validateUser={this.validateUser}
            />
          )}
        </React.Fragment>
      );
    }
  };

export default Authenticate;
