import React from 'react';
import {TopBarComp, TopBar__container, TopBar__containerContainerLeft, TopBar__containerContainerLeftSpan,
        TopBar__containerContainerCenter, TopBar__centerSpan, TopBar__containerRight, TopBar__rightSpan} from "./Styling";

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarComp>
      <TopBar__container>
        <TopBar__containerContainerLeft>
          <TopBar__containerContainerLeftSpan>TOPICS</TopBar__containerContainerLeftSpan><TopBar__containerContainerLeftSpan>SEARCH</TopBar__containerContainerLeftSpan>
        </TopBar__containerContainerLeft>
        <TopBar__containerContainerCenter>
          <TopBar__centerSpan>GENERAL</TopBar__centerSpan><TopBar__centerSpan>BROWNBAG</TopBar__centerSpan><TopBar__centerSpan>RANDOM</TopBar__centerSpan><TopBar__centerSpan>MUSIC</TopBar__centerSpan><TopBar__centerSpan>ANNOUNCEMENTS</TopBar__centerSpan>
        </TopBar__containerContainerCenter>
        <TopBar__containerRight>
          <TopBar__rightSpan>LOG IN</TopBar__rightSpan>
        </TopBar__containerRight>
      </TopBar__container>
    </TopBarComp>
  )
}

export default TopBar;