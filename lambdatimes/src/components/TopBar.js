import React from 'react';
import {
  TopBarDiv,
  TopBarContainer,
  TopBarLeft,
  TopBarCenter,
  TopBarRight
 } from '../style/reusables.js';


// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarDiv>
      <TopBarContainer>
        <TopBarLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </TopBarLeft>
        <TopBarCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </TopBarCenter>
        <TopBarRight>
          <span>LOG IN</span>
        </TopBarRight>
      </TopBarContainer>
    </TopBarDiv>
  )
}

export default TopBar;
