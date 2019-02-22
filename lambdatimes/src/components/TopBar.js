import React from 'react';
import {TopBarDiv, TBContainerDiv, TBContainerLeft, 
  TBContainerLeftSpan, TBContainerCenter, TBContainerCenterSpan,
  TBContainerRightDiv, TBCRSpan,TBCCSpanLast} from '../Styles'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarDiv>
      <TBContainerDiv>
        <TBContainerLeft>
          <TBContainerLeftSpan>TOPICS</TBContainerLeftSpan><TBContainerLeftSpan>SEARCH</TBContainerLeftSpan>
        </TBContainerLeft>
        <TBContainerCenter>
          <TBContainerCenterSpan>GENERAL</TBContainerCenterSpan><TBContainerCenterSpan>BROWNBAG</TBContainerCenterSpan><TBContainerCenterSpan>RANDOM</TBContainerCenterSpan><TBContainerCenterSpan>MUSIC</TBContainerCenterSpan><TBCCSpanLast>ANNOUNCEMENTS</TBCCSpanLast>
        </TBContainerCenter>
        <TBContainerRightDiv>
          <TBCRSpan>LOG IN</TBCRSpan>
        </TBContainerRightDiv>
      </TBContainerDiv>
    </TopBarDiv>
  )
}

export default TopBar;