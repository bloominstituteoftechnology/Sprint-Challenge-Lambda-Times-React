import React from "react";
import styled from "styled-components";
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file
const TopBar = () => {
  return (
    <TopBarDiv>
      <TopBarContainer>
        <TopBarLeft>
          <TopBarLeftSpan>TOPICS</TopBarLeftSpan>
          <TopBarLeftSpan>SEARCH</TopBarLeftSpan>
        </TopBarLeft>
        <TopBarContainerCenter>
          <TopBarContainerCenterSpan>GENERAL</TopBarContainerCenterSpan>
          <TopBarContainerCenterSpan>BROWNBAG</TopBarContainerCenterSpan>
          <TopBarContainerCenterSpan>RANDOM</TopBarContainerCenterSpan>
          <TopBarContainerCenterSpan>MUSIC</TopBarContainerCenterSpan>
          <TopBarContainerCenterSpan>ANNOUNCEMENTS</TopBarContainerCenterSpan>
        </TopBarContainerCenter>
        <TopBarContainerRight>
          <span>LOG IN</span>
        </TopBarContainerRight>
      </TopBarContainer>
    </TopBarDiv>
  );
};

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
`;

const TopBarLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const TopBarContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const TopBarContainerRight = styled.div`
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

const TopBarContainerCenterSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;
`;

const TopBarContainerRightSpan = styled.span`
  cursor: pointer;  
`;


export default TopBar;

