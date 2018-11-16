import React from 'react';
import Login from './components/Login';
import TopBar from './components/TopBar';
import Header from './components/Header';

const Authenticate = Component => class extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
  }

  componentDidMount() {
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  }

  logOut = () => {
    localStorage.clear();
    window.location.reload();
  }

  render() {
    return  this.state.loggedIn ? (
      <Component logout={this.logOut} loggedIn={this.state.loggedIn}/>
    ) : (
      <div>
        <TopBar loggedIn={this.state.loggedIn}/>
        <Header />
        <Login />
      </div>
    )
  }
}

export default Authenticate;

