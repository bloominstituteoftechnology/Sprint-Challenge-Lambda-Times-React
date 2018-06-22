import React from 'react';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

import {
  BarTop, BarContainer, BarLeft, BarLeftSpan, BarCenter, BarCenterSpan, BarRight, BarRightSpan
} from "../ReusableStyles"



const TopBar = () => {
  return (
    <BarTop>
      <BarContainer>
        <BarLeft>
          <BarLeftSpan>TOPICS</BarLeftSpan><BarLeftSpan>SEARCH</BarLeftSpan>
        </BarLeft>
        <BarCenter>
          <BarCenterSpan>GENERAL</BarCenterSpan>
          <BarCenterSpan>BROWNBAG</BarCenterSpan>
          <BarCenterSpan>RANDOM</BarCenterSpan>
          <BarCenterSpan>MUSIC</BarCenterSpan>
          <BarCenterSpan>ANNOUNCEMENTS</BarCenterSpan>
        </BarCenter>
        <BarRight>
          <BarRightSpan>LOG IN</BarRightSpan>
        </BarRight>
      </BarContainer>
    </BarTop>
  )
}

export default TopBar;