import React from "react";
import styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarDiv>
      <TopBarContainerDiv>
        <TopBarLeftDiv>
          <TopBarLeftSpan>TOPICS</TopBarLeftSpan>
          <TopBarLeftSpan>SEARCH</TopBarLeftSpan>
        </TopBarLeftDiv>
        <TopBarCenterDiv>
          <TopBarCenterSpan>GENERAL</TopBarCenterSpan>
          <TopBarCenterSpan>BROWNBAG</TopBarCenterSpan>
          <TopBarCenterSpan>RANDOM</TopBarCenterSpan>
          <TopBarCenterSpan>MUSIC</TopBarCenterSpan>
          <TopBarCenterSpan>ANNOUNCEMENTS</TopBarCenterSpan>
        </TopBarCenterDiv>
        <TopBarRightDiv>
          <TopBarRightSpan>LOG IN</TopBarRightSpan>
        </TopBarRightDiv>
      </TopBarContainerDiv>
    </TopBarDiv>
  );
};

export const TopBarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

export const TopBarContainerDiv = styled.div`
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

export const TopBarLeftDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;
export const TopBarLeftSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

export const TopBarCenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

export const TopBarCenterSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;
  :hover {
  text-decoration: underline;
  }
  :last-child {
  margin-right: 0;
  }
`;

export const TopBarRightDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

export const TopBarRightSpan = styled.span`
  cursor: pointer;
`;



export default TopBar;
