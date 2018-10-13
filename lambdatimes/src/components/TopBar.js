import React from 'react';
import {
  Topbar,
  TopbarContainer,
  TopbarLeft,
  TopbarCenter,
  TopbarRight
} from "./Styles/StyledComponets";
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <Topbar>
      <TopbarContainer>
        <TopbarLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </TopbarLeft>
        <TopbarCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </TopbarCenter>
        <TopbarRight>
          <span>LOG IN</span>
        </TopbarRight>
      </TopbarContainer>
    </Topbar>
  )
}

export default TopBar;