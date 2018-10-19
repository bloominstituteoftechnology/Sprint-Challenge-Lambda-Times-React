import React from 'react';
import {TopBarDiv, TopBarContainerDiv, TopBarContainerLeft, 
  TopBarContainerLeftSpan, TopBarContainerCenter, TopBarContainerCenterSpan,
  TopBarContainerRightDiv, TopBarContainerRightspan, TopBarContainerSpanLast} from '../Styles'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarDiv>
      <TopBarContainerDiv>
        <TopBarContainerLeft>
          <TopBarContainerLeftSpan>TOPICS</TopBarContainerLeftSpan><TopBarContainerLeftSpan>SEARCH</TopBarContainerLeftSpan>
        </TopBarContainerLeft>
        <TopBarContainerCenter>
          <TopBarContainerCenterSpan>GENERAL</TopBarContainerCenterSpan><TopBarContainerCenterSpan>BROWNBAG</TopBarContainerCenterSpan><TopBarContainerCenterSpan>RANDOM</TopBarContainerCenterSpan><TopBarContainerCenterSpan>MUSIC</TopBarContainerCenterSpan><TopBarContainerSpanLast>ANNOUNCEMENTS</TopBarContainerSpanLast>
        </TopBarContainerCenter>
        <TopBarContainerRightDiv>
          <TopBarContainerRightspan>LOG IN</TopBarContainerRightspan>
        </TopBarContainerRightDiv>
      </TopBarContainerDiv>
    </TopBarDiv>
  )
}

export default TopBar;