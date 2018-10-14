import React from 'react';
import { StyledTopBar, StyledContainer, StyledContainerLeft, StyledSpan, StyledContainerCenter, StyledContSpan, StyledContRight, StyledRightSpan } from './Content/Styles';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <StyledTopBar>
      <StyledContainer>
        <StyledContainerLeft>
          <StyledSpan>TOPICS</StyledSpan><StyledSpan>SEARCH</StyledSpan>
        </StyledContainerLeft>
        <StyledContainerCenter>
          <StyledContSpan>GENERAL</StyledContSpan><StyledContSpan>BROWNBAG</StyledContSpan><StyledContSpan>RANDOM</StyledContSpan><StyledContSpan>MUSIC</StyledContSpan><StyledContSpan>ANNOUNCEMENTS</StyledContSpan>
        </StyledContainerCenter>
        <StyledContRight>
          <StyledRightSpan>LOG IN</StyledRightSpan>
        </StyledContRight>
      </StyledContainer>
    </StyledTopBar>
  )
}

export default TopBar;