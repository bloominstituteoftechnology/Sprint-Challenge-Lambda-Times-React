import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Authenticate from './Authentication/Authenticate';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  logout = event => {
    localStorage.clear();
    window.location.reload();
}  
  render() {
    return (
      <div className="App">
        <TopBar logout={this.logout}/>
        <Header />
        <Content />
      </div>
    );
  }
  
}

export default Authenticate(App);
