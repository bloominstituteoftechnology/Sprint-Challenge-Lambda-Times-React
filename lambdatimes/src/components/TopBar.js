import React from 'react';
import {
  StyledTopBar,
  StyledContainer,
  StyledContainerLeft,
  StyledContainerCenter,
  StyledContainerRight,
  StyledLeftSpan,
  StyledCenterSpan,
  StyledRightSpan
} from './StyledTopBar';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <StyledTopBar>
      <StyledContainer>
        <StyledContainerLeft>
          <StyledLeftSpan>TOPICS</StyledLeftSpan>
          <StyledLeftSpan>SEARCH</StyledLeftSpan>
        </StyledContainerLeft>
        <StyledContainerCenter>
          <StyledCenterSpan>GENERAL</StyledCenterSpan>
          <StyledCenterSpan>BROWNBAG</StyledCenterSpan>
          <StyledCenterSpan>RANDOM</StyledCenterSpan>
          <StyledCenterSpan>MUSIC</StyledCenterSpan>
          <StyledCenterSpan>ANNOUNCEMENTS</StyledCenterSpan>
        </StyledContainerCenter>
        <StyledContainerRight>
          <StyledRightSpan>LOG IN</StyledRightSpan>
        </StyledContainerRight>
      </StyledContainer>
    </StyledTopBar>
  );
};

export default TopBar;
