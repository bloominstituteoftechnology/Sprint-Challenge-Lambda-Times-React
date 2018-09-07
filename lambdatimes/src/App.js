import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Authenticate from './components/Authentication/Authenticate';

const AuthContent = Authenticate(Content);

class App  extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('lambdaTimesLoggedIn', e.target[0].value);
    window.location.reload();
  }

  handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('lambdaTimesLoggedIn');
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <TopBar handleLogOut = { this.handleLogOut } handleSubmit = { this.handleSubmit } />
        <Header />
        <AuthContent />
      </div>
    );
  }
}

export default App;
