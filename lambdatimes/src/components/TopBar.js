import React from 'react';
import {TopNav, TopContainer, TopContainerLeft, TopContainerLeftSpan, TopContainerCenter, TopContainerCenterSpan, TopContainerRight, TopContainerRightSpan} from './TopBarStyles';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopNav>
      <TopContainer>
        <TopContainerLeft>
          <TopContainerLeftSpan>TOPICS</TopContainerLeftSpan><TopContainerLeftSpan>SEARCH</TopContainerLeftSpan>
        </TopContainerLeft>
        <TopContainerCenter>
          <TopContainerCenterSpan>GENERAL</TopContainerCenterSpan><TopContainerCenterSpan>BROWNBAG</TopContainerCenterSpan><TopContainerCenterSpan>RANDOM</TopContainerCenterSpan><TopContainerCenterSpan>MUSIC</TopContainerCenterSpan><TopContainerCenterSpan>ANNOUNCEMENTS</TopContainerCenterSpan>
        </TopContainerCenter>
        <TopContainerRight>
          <TopContainerRightSpan>LOG IN</TopContainerRightSpan>
        </TopContainerRight>
      </TopContainer>
    </TopNav>
  )
}

export default TopBar;