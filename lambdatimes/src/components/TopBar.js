import React from 'react';
import { Top, TopContain, TopContainLeft, TopContainLeftSpan, TopContainCenter, TopContainCenterSpan, TopContainRight, TopContainRightSpan } from '../Styles';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <Top>
      <TopContain>
        <TopContainLeft>
          <TopContainLeftSpan>TOPICS</TopContainLeftSpan><TopContainLeftSpan>SEARCH</TopContainLeftSpan>
        </TopContainLeft>
        <TopContainCenter>
          <TopContainCenterSpan>GENERAL</TopContainCenterSpan>
          <TopContainCenterSpan>BROWNBAG</TopContainCenterSpan>
          <TopContainCenterSpan>RANDOM</TopContainCenterSpan>
          <TopContainCenterSpan>MUSIC</TopContainCenterSpan>
          <TopContainCenterSpan>ANNOUNCEMENTS</TopContainCenterSpan>
        </TopContainCenter>
        <TopContainRight>
          <TopContainRightSpan>LOG IN</TopContainRightSpan>
        </TopContainRight>
      </TopContain>
    </Top>
  )
}

export default TopBar;