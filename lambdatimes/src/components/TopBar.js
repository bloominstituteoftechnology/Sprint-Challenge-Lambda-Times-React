import React from 'react';
import {TopBarStyle, TopBarContainerStyle,TopBarContainerLeftStyle,TopBarContainerLeftSpanStyle,TopBarContainerCenterStyle,TopBarContainerCenterSpanStyle,TopBarContainerRightStyle,TopBarContainerRightSpanStyle} from './StyledComponents'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarStyle>
      <TopBarContainerStyle>
        <TopBarContainerLeftStyle>
          <TopBarContainerLeftSpanStyle>TOPICS</TopBarContainerLeftSpanStyle>
          <TopBarContainerLeftSpanStyle>SEARCH</TopBarContainerLeftSpanStyle>
        </TopBarContainerLeftStyle>
        <TopBarContainerCenterStyle>
          <TopBarContainerCenterSpanStyle>GENERAL</TopBarContainerCenterSpanStyle>
          <TopBarContainerCenterSpanStyle>BROWNBAG</TopBarContainerCenterSpanStyle>
          <TopBarContainerCenterSpanStyle>RANDOM</TopBarContainerCenterSpanStyle>
          <TopBarContainerCenterSpanStyle>MUSIC</TopBarContainerCenterSpanStyle>
          <TopBarContainerCenterSpanStyle>ANNOUNCEMENTS</TopBarContainerCenterSpanStyle>
        </TopBarContainerCenterStyle>
        <TopBarContainerRightStyle>
          <TopBarContainerRightSpanStyle>LOG IN</TopBarContainerRightSpanStyle>
        </TopBarContainerRightStyle>
      </TopBarContainerStyle>
    </TopBarStyle>
  )
}

export default TopBar;