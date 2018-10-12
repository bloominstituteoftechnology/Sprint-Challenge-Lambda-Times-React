import React from 'react';
import Styled from 'styled-components';

const LeftContainer = Styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`
const LeftSpan = Styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`
const RightContainer = Styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`
const RightSpan = Styled.span`
  cursor: pointer;  
`
const CenterContainer = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`
const CenterSpan = Styled.span`
  cursor: pointer;
  margin-right: 5%;

  :last-child {
    margin-right: 0;
  }

  :hover {
    text-decoration: underline; 
  }
`
const Container = Styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
    .top-bar .container {
      width: 1280px;
    }
  }
`
const TopBarSection = Styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`


const TopBar = () => {
  return (
    <TopBarSection>
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
    </TopBarSection>
  )
}

export default TopBar;