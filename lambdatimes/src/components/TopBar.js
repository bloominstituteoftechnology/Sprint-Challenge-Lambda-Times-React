import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;
  }
  @media (min-width: 1280px) {
    .top-bar .container {
      width: 1280px;
    }
`;

const ContainerDirection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  ${props => (props.type === 'left' ? `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;` : null)};

  ${props => (props.type === 'center' ? `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;` : null)};

  ${props => (props.type === 'right' ? `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
  ` : null)};
`;

const Span = styled.span`
  cursor: pointer;
  
  ${props => (props.type === 'spanLeft' ? `
    margin-right: 25%;
    font-weight: bold;
  ` : null)}

  ${props => (props.type === 'spanCenter' ? `
     margin-right: 5%;

      &::last-child {
        margin-right: 0;
       };

       &::hover {
        text-decoration: underline;
       };
  ` : null)}
`

const TopBar = () => {
  return (
    <TopBarDiv>

      <Container>

        <ContainerDirection type="left">

          <Span type="spanLeft">TOPICS</Span>
          <Span type="spanLeft">SEARCH</Span>

        </ContainerDirection>

        <ContainerDirection type="center">

          <Span type="spanCenter">GENERAL</Span>
          <Span type="spanCenter">BROWNBAG</Span>
          <Span type="spanCenter">RANDOM</Span>
          <Span type="spanCenter">MUSIC</Span>
          <Span type="spanCenter">ANNOUNCEMENTS</Span>

        </ContainerDirection>

        <ContainerDirection type="right">

          <Span>LOG IN</Span>

        </ContainerDirection>

      </Container>
    </TopBarDiv>
  )
}

export default TopBar;
