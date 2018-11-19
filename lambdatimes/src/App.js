import React from 'react';

import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      login: false,
    }
  }

  loginHandler = () => this.setState({login: true});

  render() {
    return (
      <div className="App">
        <TopBar loggedIn={this.state.login}/>
        <Header />
        <Content loginHandler={this.loginHandler} />
      </div>
    );
  }
} 

export default App;