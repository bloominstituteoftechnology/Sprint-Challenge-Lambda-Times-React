import React from 'react';
import { TopBarWrap, TopBarContainer, TopBarLeft, LeftSpan, TopBarCenter, CenterSpan, TopBarRight, RightSpan } from './StyleComponents.js';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarWrap >
      <TopBarContainer>
        <TopBarLeft>
          <LeftSpan>TOPICS</LeftSpan><LeftSpan>SEARCH</LeftSpan>
        </TopBarLeft>
        <TopBarCenter>
          <CenterSpan>GENERAL</CenterSpan><CenterSpan>BROWNBAG</CenterSpan><CenterSpan>RANDOM</CenterSpan><CenterSpan>MUSIC</CenterSpan><CenterSpan last >ANNOUNCEMENTS</CenterSpan>
        </TopBarCenter>
        <TopBarRight>
          <RightSpan>LOG IN</RightSpan>
        </TopBarRight>
      </TopBarContainer>
    </TopBarWrap>
  )
}

export default TopBar;