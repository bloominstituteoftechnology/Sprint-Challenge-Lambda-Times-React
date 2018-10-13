import React from 'react'
import {TopBarSection, TopBarContainer, ContainerLeft, ContainerCenter, ContainerRight} from './Content/TopBar-styled.js';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarSection>
      <TopBarContainer>
        <ContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </ContainerLeft>
        <ContainerCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </ContainerCenter>
        <ContainerRight>
          <span>LOG IN</span>
        </ContainerRight>
      </TopBarContainer>
    </TopBarSection>
  )
}

export default TopBar;

<div className="top-bar">
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
</div>