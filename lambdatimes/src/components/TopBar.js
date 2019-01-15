import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {

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

  ${props => (props.type === 'left' ?
  `display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px; ` : null)}

  ${props => (props.type === 'center' ?
  `display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px; ` : null)}


  ${props => (props.type === 'right' ?
  `display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;` : null)}

  `;
  

  const Span = styled.span`

  ${props => (props.type === 'left' ?
  `cursor: pointer;
  margin-right: 25%;
  font-weight: bold;` : null)}

  ${props => (props.type === 'center' ?
  `cursor: pointer;
  margin-right: 5%;
  &:hover {
    text-decoration: underline;
  }
  :last-child{
    margin-right: 0; ;
  }` : null)}

  ${props => (props.type === 'right' ?
  `cursor: pointer;` : null)}

  `;
  return (
    <TopBarDiv>
      <Container>
        <Container type = "left">
          <Span type = "left">TOPICS</Span><Span type = "left">SEARCH</Span>
        </Container>
        <Container type = "center">
          <Span type = "center">GENERAL</Span><Span type = "center">BROWNBAG</Span><Span type = "center">RANDOM</Span><Span type = "center">MUSIC</Span><Span type = "center">ANNOUNCEMENTS</Span>
        </Container>
        <Container type = "right">
          <Span type = "right">LOG IN</Span>
        </Container>
      </Container>
    </TopBarDiv>
  )
}

export default TopBar;