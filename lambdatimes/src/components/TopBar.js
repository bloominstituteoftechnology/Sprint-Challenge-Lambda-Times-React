import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Topbar = styled.section`
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
`
const LeftContainer = styled.div`
display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-left: 16%;
  font-size: 11px;
`
const LeftSpan = LeftContainer.extend`
cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`

const CenterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
margin-left: 22%;
font-size: .6rem;
`

const CenterSpan = CenterContainer.extend`
cursor: pointer;
`

const RightContainer = styled.div`
display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  margin-right: 12.5%;
  font-size: 11px;
  font-weight: bold;
`
const RightSpan = RightContainer.extend`
cursor: pointer;
`

const TopBar = () => {
  return (
    <Topbar>
      <Container>
        <LeftContainer>
          <LeftSpan>TOPICS</LeftSpan><LeftSpan>SEARCH</LeftSpan>
        </LeftContainer>
        <CenterContainer>
          <CenterSpan>GENERAL</CenterSpan><CenterSpan>BROWNBAG</CenterSpan><CenterSpan>RANDOM</CenterSpan><CenterSpan>MUSIC</CenterSpan><CenterSpan>ANNOUNCEMENTS</CenterSpan>
        </CenterContainer>
        <RightContainer>
          <RightSpan>LOG IN</RightSpan>
        </RightContainer>
      </Container>
    </Topbar>
  )
}

export default TopBar;