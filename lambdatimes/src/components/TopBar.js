import React from 'react';
import {StyledTopBar, TopBarContainer, LeftContainer, LeftSpan, CenterContainer, CenterSpan, RightContainer, LogIn} from './Styles';
 
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <StyledTopBar>
      <TopBarContainer>
        <LeftContainer>
          <LeftSpan>TOPICS</LeftSpan><LeftSpan>SEARCH</LeftSpan>
        </LeftContainer>
        <CenterContainer>
          <CenterSpan>GENERAL</CenterSpan><CenterSpan>BROWNBAG</CenterSpan><CenterSpan>RANDOM</CenterSpan><CenterSpan>MUSIC</CenterSpan><CenterSpan type='last'>ANNOUNCEMENTS</CenterSpan>
        </CenterContainer>
        <RightContainer>
          <LogIn>LOG IN</LogIn>
        </RightContainer>
      </TopBarContainer>
    </StyledTopBar>
  )
}

export default TopBar;