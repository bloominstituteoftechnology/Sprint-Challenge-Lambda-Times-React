import React, { Component } from 'react';
import TopBar from '../TopBar';
import Header from '../Header';
import Content from '../Content/Content';

class ContentPage extends Component {
  handleLogOut = () => {
    localStorage.removeItem("username")
    window.location.reload(true);
  }

  render() {
    return (
      <div className="App">
        <TopBar handleLogOut={this.handleLogOut}/>
        <Header />
        <Content />
      </div>
    );
  }
}

export default ContentPage;