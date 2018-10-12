import React from "react";
import styled from "styled-components";
import {
  StyledTopBar,
  StyledContainer,
  StyledContainerLeft,
  StyledContainerLeftSpan,
  StyledContainerCenter,
  StyledContainerCenterSpan,
  StyledContainerRight,
  StyledContainerRightSpan
} from "./styles.js";
import "../CSS/index.css";
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <StyledTopBar>
      <StyledContainer>
        <StyledContainerLeft>
          <StyledContainerLeftSpan>TOPICS</StyledContainerLeftSpan>
          <StyledContainerLeftSpan>SEARCH</StyledContainerLeftSpan>
        </StyledContainerLeft>
        <StyledContainerCenter>
          <StyledContainerCenterSpan>GENERAL</StyledContainerCenterSpan>
          <StyledContainerCenterSpan>BROWNBAG</StyledContainerCenterSpan>
          <StyledContainerCenterSpan>RANDOM</StyledContainerCenterSpan>
          <StyledContainerCenterSpan>MUSIC</StyledContainerCenterSpan>
          <StyledContainerCenterSpan>ANNOUNCEMENTS</StyledContainerCenterSpan>
        </StyledContainerCenter>
        <StyledContainerRight>
          <StyledContainerRightSpan>LOG IN</StyledContainerRightSpan>
        </StyledContainerRight>
      </StyledContainer>
    </StyledTopBar>
  );
};

export default TopBar;
