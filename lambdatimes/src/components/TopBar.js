import React from 'react';
import {Top_Bar,
        TopBarContainer,
        TopBarContainerLeft,
        TopBarContainerCenter,
        TopBarContainerBottom} from './Content/Styles';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

function TopBar() {
  return (
    <Top_Bar>
      <TopBarContainer>
        <TopBarContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </TopBarContainerLeft>
        <TopBarContainerCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span>
          <span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </TopBarContainerCenter>
        <TopBarContainerBottom>
          <span>LOG IN</span>
        </TopBarContainerBottom>
      </TopBarContainer>
    </Top_Bar>
  )
}

export default TopBar;