import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';

class App extends Component {
  state = {
    loggedIn: true
  };

  triggerLogInModal = e => {
    if (e.target.innerText === 'LOG IN') {
      this.setState({ loggedIn: false });
    }
  };

  login = () => {
    this.setState({ loggedIn: true });
  };

  render() {
    return (
      <div className="App" onClick={this.triggerLogInModal}>
        <TopBar loggedIn={this.state.loggedIn} />
        <Header />
        <Content loggedIn={this.state.loggedIn} login={this.login} />
      </div>
    );
  }
}

export default App;
