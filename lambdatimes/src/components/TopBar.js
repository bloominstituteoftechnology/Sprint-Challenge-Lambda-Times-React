import React from 'react';
import {StyledTopBar, TopBarContainer, TopBarContainerLeft, TopBarContainerCenter, TopBarContainerRight} from '../../src/styles';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <StyledTopBar>
      <TopBarContainer>
        <TopBarContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </TopBarContainerLeft>
        <TopBarContainerCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </TopBarContainerCenter>
        <TopBarContainerRight>
          <span>LOG IN</span>
        </TopBarContainerRight>
      </TopBarContainer>
      </StyledTopBar>
  )
}

export default TopBar;