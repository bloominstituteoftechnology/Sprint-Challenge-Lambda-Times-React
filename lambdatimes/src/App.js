import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Authenticate from './components/Authentication/Authenticate';

const AuthContent = Authenticate(Content);

class App  extends React.Component {
  constructor() {
    super();

    this.state = {
      footerMsg: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target[0].value || !e.target[1].value) {
      this.setState({
        footerMsg: 'Please enter a username and password.',
      });
    } else {
      localStorage.setItem('lambdaTimesLoggedIn', e.target[0].value);
      window.location.reload();
    }
  }

  handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('lambdaTimesLoggedIn');
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <TopBar 
          footerMsg = { this.state.footerMsg } 
          handleLogOut = { this.handleLogOut } 
          handleSubmit = { this.handleSubmit } 
        />
        <Header />
        <AuthContent />
      </div>
    );
  }
}

export default App;
