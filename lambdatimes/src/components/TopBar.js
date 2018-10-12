import React from "react";
import styled from "styled-components";
import {
  StyledTopBar,
  StyledTopBarContCent,
  StyledTopBarContLeft,
  StyledTopBarContRight,
  TopBarCentSpan,
  TopBarLeftSpan,
  TopBarRightSpan,
  StyledTopBarContainer
} from "./StyledTopBar";



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
