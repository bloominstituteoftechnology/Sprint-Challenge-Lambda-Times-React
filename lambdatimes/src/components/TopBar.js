import React from 'react';
import { TopBarMain, TopBarCont, TopBarContLeft, TopSpanTopicsSearch, TopBarContCenter, TopSpanGBR, TopBarContRight, TopSpanLastChild, TopBarContSpanRight } from './Reusable/Reusables';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarMain>
      <TopBarCont>
        <TopBarContLeft>
          <TopSpanTopicsSearch>TOPICS</TopSpanTopicsSearch><TopSpanTopicsSearch>SEARCH</TopSpanTopicsSearch>
        </TopBarContLeft>
        <TopBarContCenter>
          <TopSpanGBR>GENERAL</TopSpanGBR><TopSpanGBR>BROWNBAG</TopSpanGBR><TopSpanGBR>RANDOM</TopSpanGBR><TopSpanGBR>MUSIC</TopSpanGBR><TopSpanLastChild>ANNOUNCEMENTS</TopSpanLastChild>
        </TopBarContCenter>
        <TopBarContRight>
          <TopBarContSpanRight>LOG IN</TopBarContSpanRight>
        </TopBarContRight>
      </TopBarCont>
    </TopBarMain>
  )
}

export default TopBar;