import React from 'react';
import { TopBarWrapper, TopBarContainer, TopBarLeft,
          LeftSpan, TopBarCenter, CenterSpan,
            TopBarRight, RightSpan } from './StyledComponents';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarWrapper>
      <TopBarContainer>
        <TopBarLeft>
          <LeftSpan>TOPICS</LeftSpan><LeftSpan>SEARCH</LeftSpan>
        </TopBarLeft>
        <TopBarCenter>
          <CenterSpan>GENERAL</CenterSpan>
          <CenterSpan>BROWNBAG</CenterSpan>
          <CenterSpan>RANDOM</CenterSpan>
          <CenterSpan>MUSIC</CenterSpan>
          <CenterSpan>ANNOUNCEMENTS</CenterSpan>
        </TopBarCenter>
        <TopBarRight>
          <RightSpan>LOG IN</RightSpan>
        </TopBarRight>
      </TopBarContainer>
    </TopBarWrapper>
  )
}

export default TopBar;
