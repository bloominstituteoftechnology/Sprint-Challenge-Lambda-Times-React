import React from 'react';
import styled, {css} from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Top = styled.div`
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
`;

const LeftContainer = styled.div`
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;

${props => props.span && css`
cursor: pointer;
margin-right: 25%;
font-weight: bold;
`}

`;


const CenterContainer = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;

${props => props.span && css`
cursor: pointer;
  margin-right: 5%;
  
  :last-child {
    margin-right: 0;
  }

  :hover {
    text-decoration: underline;
  }

`}

`;


const RightContainer = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
font-weight: bold;

${props => props.span && css`
cursor: pointer;
`}

`;



const TopBar = () => {
  return (
    <Top>
      <Container>
        <LeftContainer>
          <LeftContainer span>TOPICS</LeftContainer><LeftContainer span>SEARCH</LeftContainer>
        </LeftContainer>
        <CenterContainer>
          <CenterContainer span>GENERAL</CenterContainer><CenterContainer span>BROWNBAG</CenterContainer><CenterContainer span>RANDOM</CenterContainer><CenterContainer span>MUSIC</CenterContainer><CenterContainer span>ANNOUNCEMENTS</CenterContainer>
        </CenterContainer>
        <RightContainer>
          <span>LOG IN</span>
        </RightContainer>
      </Container>
    </Top>
  )
}

export default TopBar;