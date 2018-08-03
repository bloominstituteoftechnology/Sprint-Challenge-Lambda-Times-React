import React from 'react';
import styled from 'styled-components';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

 const TopBarRefracted = styled.div`
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
 const TopBarLeftContainer = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;
 const TopBarLeftSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;
 const TopBarCenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;
 const TopBarRightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;
 const RightSpanItem = styled.span`
  cursor: pointer;
`;
 const MiddleSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;
   &:hover {
    text-decoration: underline;
  }
`;
 const LastMiddleSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;
  margin-right: 0;
   &:hover {
    text-decoration: underline;
  }
`;



const TopBar = () => {
  return (
    <TopBarRefracted>
      <TopBarContainer>
        <TopBarLeftContainer>
          <TopBarLeftSpan>TOPICS</TopBarLeftSpan><TopBarLeftSpan>SEARCH</TopBarLeftSpan>
        </TopBarLeftContainer>
        <TopBarCenterContainer>
          <MiddleSpan>GENERAL</MiddleSpan><MiddleSpan>BROWNBAG</MiddleSpan><MiddleSpan>RANDOM</MiddleSpan><MiddleSpan>MUSIC</MiddleSpan><MiddleSpan>ANNOUNCEMENTS</MiddleSpan>
        </TopBarCenterContainer>
        <TopBarRightContainer>
          <RightSpanItem>LOG IN</RightSpanItem>
        </TopBarRightContainer>
      </TopBarContainer>
    </TopBarRefracted>
  )
}

export default TopBar;