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

  render() {
    return  this.state.loggedIn ? (
      <Component />
    ) : (
      <div>
        <TopBar />
        <Header />
        <Login />
      </div>
    )
  }
}

export default Authenticate;

