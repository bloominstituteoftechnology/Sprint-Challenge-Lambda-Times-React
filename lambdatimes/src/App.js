import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Login from './components/Login';

class App extends Component {

  constructor() {

    super();
    this.state = {

      username: '',
      logBtnPressed: false

    }

  }

  setUsername = newUser => {

    this.setState({username: newUser});

  }

  toggleBtnPress = () => {

    this.setState({logBtnPressed: !this.state.logBtnPressed});

  }

  render() {

    return (
      <div className="App">
        <TopBar username={this.state.username} setUsername={this.setUsername} toggleBtnPress={this.toggleBtnPress}/>
        <Header />
        <Login setUsername={this.setUsername} logBtnPressed={this.state.logBtnPressed} toggleBtnPress={this.toggleBtnPress}/>
        {this.state.username !== '' && <Content />}
      </div>
    );

  }

}

export default App;
