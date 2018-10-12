import React from 'react';
import { StyledTopBar, TopBarContainer, TopBarContainerLeft, TopBarContainerCenter, TopBarContainerRight } from "./Styles";

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

    {/* <div className="top-bar">
      <div className="container">
        <div className="container-left">
          <span>TOPICS</span><span>SEARCH</span>
        </div>
        <div className="container-center">
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </div>
        <div className="container-right">
          <span>LOG IN</span>
        </div>
      </div>
    </div> */}
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