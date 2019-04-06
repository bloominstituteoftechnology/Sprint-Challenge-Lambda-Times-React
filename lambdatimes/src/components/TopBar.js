import React from 'react';

import {StyledTopBar, StyledTopBarContainer, StyledTopBarContainerLeft, 
  StyledTopBarContainerCenter, StyledTopBarContainerRight, StyledLeftSpan, 
  StyledCenterSpan, StyledCenterSpanLast, StyledRightSpan} from './StyledComponents/TopBarStyles';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file



const TopBar = () => {
  return (
    <StyledTopBar>
      <StyledTopBarContainer>

        <StyledTopBarContainerLeft>
          <StyledLeftSpan>TOPICS</StyledLeftSpan>
          <StyledLeftSpan>SEARCH</StyledLeftSpan>
        </StyledTopBarContainerLeft>

        <StyledTopBarContainerCenter>
          <StyledCenterSpan>GENERAL</StyledCenterSpan>
          <StyledCenterSpan>BROWNBAG</StyledCenterSpan>
          <StyledCenterSpan>RANDOM</StyledCenterSpan>
          <StyledCenterSpan>MUSIC</StyledCenterSpan>
          <StyledCenterSpanLast>ANNOUNCEMENTS</StyledCenterSpanLast>
        </StyledTopBarContainerCenter>

        <StyledTopBarContainerRight>
          <StyledRightSpan>LOG IN</StyledRightSpan>
        </StyledTopBarContainerRight>

      </StyledTopBarContainer>
    </StyledTopBar>
  )
}

export default TopBar;