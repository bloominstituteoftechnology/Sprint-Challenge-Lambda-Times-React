import React from "react";
import styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

export const StyledTopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

export const TopBarWrapper = styled.div`
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

export const TopBarLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  margin-right: 15%;
`;

export const TopBarSpan = styled.div`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

export const TopBarCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

export const TopBarCenterSpan = styled.div`
  cursor: pointer;
  margin-right: 5%;
`;

export const TopBarRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

export const TopBarRightSpan = styled.div`
  cursor: pointer;
`;

const TopBar = () => {
  return (
    <StyledTopBar>
      <TopBarWrapper>
        <TopBarLeft>
          <TopBarSpan>TOPICS</TopBarSpan>
          <TopBarSpan>SEARCH</TopBarSpan>
        </TopBarLeft>
        <TopBarCenter>
          <TopBarCenterSpan>GENERAL</TopBarCenterSpan>>
          <TopBarCenterSpan>>BROWNBAG</TopBarCenterSpan>>
          <TopBarCenterSpan>>RANDOM</TopBarCenterSpan>>
          <TopBarCenterSpan>>MUSIC</TopBarCenterSpan>>
          <TopBarCenterSpan>>ANNOUNCEMENTS</TopBarCenterSpan>>
        </TopBarCenter>
        <TopBarRight>
          <TopBarRightSpan>LOG IN</TopBarRightSpan>
        </TopBarRight>
      </TopBarWrapper>
    </StyledTopBar>
  );
};

export default TopBar;
