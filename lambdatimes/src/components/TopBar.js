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

  @media (min-width: 1280px) {
      width: 1280px;
    }
`;

const SubContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;

    ${props => (props.type === "left" ? `justify-content: none` : null)}
    ${props => (props.type === "center" ? `justify-content: center; flex: 3; font-size: 9px;` : null)}
    ${props => (props.type === "right" ? `justify-content: flex-end; font-weight: bold;` : null)}
`;

const Span = styled.span`
    cursor: pointer;

    ${props => (props.type === "left" ? `margin-right: 25%; font-weight: bold` : null)}
    ${props => (props.type === "center" ? `margin-right: 5%;` : null)}
    ${props => (props.type === "last-center" ? `margin-right: 0; :hover{ text-decoration: underline; }` : null)}
`;

const TopBar = () => {
  return (
    <TopBarDiv>
      <Container>
        <SubContainer type="left">
          <Span type="left">TOPICS</Span><Span type="left">SEARCH</Span>
        </SubContainer>
        <SubContainer type="center">
          <Span type="center">GENERAL</Span><Span type="center">BROWNBAG</Span><Span type="center">RANDOM</Span><Span type="center">MUSIC</Span><Span type="last-center">ANNOUNCEMENTS</Span>
        </SubContainer>
        <SubContainer type="right">
          <Span>LOG IN</Span>
        </SubContainer>
      </Container>
    </TopBarDiv>
  )
}

export default TopBar;


