import React from 'react';
import{TopBarDiv,TopBarContainerCenterSpan,TopBarContainerCenterSpanLast, TopBarContainerLeftSpan, TopBarContainerRightSpan, TopBarContainer, TopBarContainerCenter, TopBarContainerLeft, TopBarContainerRight } from './ComponentStyles';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarDiv>
      <TopBarContainer>
        <TopBarContainerLeft>
          <TopBarContainerLeftSpan>TOPICS</TopBarContainerLeftSpan><TopBarContainerLeftSpan>SEARCH</TopBarContainerLeftSpan>
        </TopBarContainerLeft>
        <TopBarContainerCenter>
          <TopBarContainerCenterSpan>GENERAL</TopBarContainerCenterSpan><TopBarContainerCenterSpan>BROWNBAG</TopBarContainerCenterSpan><TopBarContainerCenterSpan>RANDOM</TopBarContainerCenterSpan><TopBarContainerCenterSpan>MUSIC</TopBarContainerCenterSpan><TopBarContainerCenterSpanLast>ANNOUNCEMENTS</TopBarContainerCenterSpanLast>
        </TopBarContainerCenter>
        <TopBarContainerRight>
          <TopBarContainerRightSpan>LOG IN</TopBarContainerRightSpan>
        </TopBarContainerRight>
      </TopBarContainer>
    </TopBarDiv>
  )
}

export default TopBar;