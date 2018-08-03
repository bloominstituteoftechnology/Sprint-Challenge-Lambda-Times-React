import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: 'PT Sans', sans-serif;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      modal: false,
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  logOut = () => {
    localStorage.removeItem('login');
    this.setState({
      modal: false,
    });
  };

  render() {
    return (
      <StyledApp>
        <TopBar isLoggedIn={localStorage.getItem('login') ? true : false} 
          toggle={this.toggle} logOut={this.logOut} />
        <Header />
        <Content isOpen={this.state.modal} toggle={this.toggle} />
      </StyledApp>
    );
  }
}

export default App;
