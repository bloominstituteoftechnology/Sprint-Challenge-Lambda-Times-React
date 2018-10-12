import React from 'react';
import { StyledTopBar, TopBarContainer, TopBarContainerLeft, TopBarContainerLeftSpan, TopBarContainerCenter, TopBarContainerCenterSpan, TopBarContainerRight, TopBarContainerRightSpan,  } from './TopBarStyles';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <StyledTopBar>
      <TopBarContainer>
        <TopBarContainerLeft>
          <TopBarContainerLeftSpan>TOPICS</TopBarContainerLeftSpan>
          <TopBarContainerLeftSpan>SEARCH</TopBarContainerLeftSpan>
        </TopBarContainerLeft>
        <TopBarContainerCenter>
          <TopBarContainerCenterSpan>GENERAL</TopBarContainerCenterSpan>
          <TopBarContainerCenterSpan>BROWNBAG</TopBarContainerCenterSpan>
          <TopBarContainerCenterSpan>RANDOM</TopBarContainerCenterSpan>
          <TopBarContainerCenterSpan>MUSIC</TopBarContainerCenterSpan>
          <TopBarContainerCenterSpan>ANNOUNCEMENTS</TopBarContainerCenterSpan>
        </TopBarContainerCenter>
        <TopBarContainerRight>
          <TopBarContainerRightSpan>LOG IN</TopBarContainerRightSpan>
        </TopBarContainerRight>
      </TopBarContainer>
    </StyledTopBar>
  );
};

export default TopBar;
