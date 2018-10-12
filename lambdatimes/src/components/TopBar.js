import React from "react";
import styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file
const StyledTopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;
const StyledTopBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
    /* @media (min-width: 1280px) {
    .top-bar .container {
      width: 1280px;
  } */
`;
const StyledTopBarContLeft = styled.div`
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
const StyledTopBarContCent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;
const TopBarCentSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    text-decoration: underline;
  }
`;
const StyledTopBarContRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;
const TopBarRightSpan = styled.span`
  cursor: pointer;
`;

const TopBar = () => {
  return (
    <StyledTopBar>
      <StyledTopBarContainer>
        <StyledTopBarContLeft>
          <TopBarLeftSpan>TOPICS</TopBarLeftSpan>
          <TopBarLeftSpan>SEARCH</TopBarLeftSpan>
        </StyledTopBarContLeft>
        <StyledTopBarContCent>
          <TopBarCentSpan>GENERAL</TopBarCentSpan>
          <TopBarCentSpan>BROWNBAG</TopBarCentSpan>
          <TopBarCentSpan>RANDOM</TopBarCentSpan>
          <TopBarCentSpan>MUSIC</TopBarCentSpan>
          <TopBarCentSpan>ANNOUNCEMENTS</TopBarCentSpan>
        </StyledTopBarContCent>
        <StyledTopBarContRight>
          <TopBarRightSpan>LOG IN</TopBarRightSpan>
        </StyledTopBarContRight>
      </StyledTopBarContainer>
    </StyledTopBar>
  );
};

export default TopBar;
