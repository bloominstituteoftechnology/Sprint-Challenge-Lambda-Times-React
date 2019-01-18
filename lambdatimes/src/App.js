import React from 'react';
import styled from 'styled-components';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Authentication from './components/Content/Authentication';

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: 'PT Sans', sans-serif;
`;

class App extends React.Component {
  render(){
    return (
        <StyledApp>
          <TopBar />
          <Header />
          <Content />
        </StyledApp>
      ); 
  }
}

export default Authentication(App);