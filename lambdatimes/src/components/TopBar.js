import React from 'react';
import {
  TopBarStyle,
  TBContainer,
  TBLContainer,
  TBLContainerContent,
  TBLContainerContentCenter,
  TBRContainer,
} from './styledComponents';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarStyle>
      <TBContainer>
        <TBLContainer>
          <TBLContainerContent>TOPICS</TBLContainerContent>
          <TBLContainerContent>SEARCH</TBLContainerContent>
        </TBLContainer>
        <TBLContainerContentCenter>
          <span>GENERAL</span>
          <span>BROWNBAG</span>
          <span>RANDOM</span>
          <span>MUSIC</span>
          <span>ANNOUNCEMENTS</span>
        </TBLContainerContentCenter>
        <TBRContainer>
          <span>LOG IN</span>
        </TBRContainer>
      </TBContainer>
    </TopBarStyle>
  );
};

export default TopBar;
