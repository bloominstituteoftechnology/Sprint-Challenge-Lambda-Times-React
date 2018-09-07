import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

//--------------------STYLED COMPONENTS --------------

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

const TopBarContainer = styled.div`
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

const LeftContainer = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const LeftContainerSpans = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const CenterContainerSpans = styled.span`
  cursor: pointer;
  margin-right: 5%;

  &:hover {
    text-decoration: underline;
  }
`;

const CenterContainerLastSpan = styled.span`
  margin-right: 0;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const RightContainerSpans = styled.span`
  cursor: pointer
`;

//--------------------STYLED COMPONENTS --------------

const TopBar = () => {
  return (
    <TopBarDiv>
      <TopBarContainer>
        <LeftContainer>
          <LeftContainerSpans>TOPICS</LeftContainerSpans>
          <LeftContainerSpans>SEARCH</LeftContainerSpans>
        </LeftContainer>
        <CenterContainer>
          <CenterContainerSpans>GENERAL</CenterContainerSpans>
          <CenterContainerSpans>BROWNBAG</CenterContainerSpans>
          <CenterContainerSpans>RANDOM</CenterContainerSpans>
          <CenterContainerSpans>MUSIC</CenterContainerSpans>
          <CenterContainerLastSpan>ANNOUNCEMENTS</CenterContainerLastSpan>
        </CenterContainer>
        <RightContainer>
          <RightContainerSpans>LOG IN</RightContainerSpans>
        </RightContainer>
      </TopBarContainer>
    </TopBarDiv>
  )
}

export default TopBar;