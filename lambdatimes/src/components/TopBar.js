import React from "react";
import styled from "styled-components";
import { StyledDiv, StyledSpan } from "../Stylesheet";

const TopBar = () => {
  return (
    <StyledDiv topBar>
      <StyledDiv tbContainer>
        <StyledDiv tbContainerLeft>
          <StyledSpan tbContainerLeftSpan>TOPICS</StyledSpan>
          <StyledSpan tbContainerLeftSpan>SEARCH</StyledSpan>
        </StyledDiv>
        <StyledDiv tbContainerCenter>
          <StyledSpan tbContainerCenterSpan>GENERAL</StyledSpan>
          <StyledSpan tbContainerCenterSpan>BROWNBAG</StyledSpan>
          <StyledSpan tbContainerCenterSpan>RANDOM</StyledSpan>
          <StyledSpan tbContainerCenterSpan>MUSIC</StyledSpan>
          <StyledSpan tbContainerCenterSpanLast>ANNOUNCEMENTS</StyledSpan>
        </StyledDiv>
        <StyledDiv tbContainerRight>
          <StyledSpan tbContainerRightSpan>LOG IN</StyledSpan>
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  );
};

export default TopBar;
