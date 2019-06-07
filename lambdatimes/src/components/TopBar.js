import React from 'react';
import {HeaderStyle} from "./TopBarStyling"


// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <HeaderStyle>
      <HeaderStyle type="container">
        <HeaderStyle type="container-left">
          <HeaderStyle type="container-left-span">TOPICS</HeaderStyle><HeaderStyle type="container-left-span"n>SEARCH</HeaderStyle>
        </HeaderStyle>
        <HeaderStyle  type="container-center">
          <HeaderStyle type="container-center-span">GENERAL</HeaderStyle><HeaderStyle type="container-center-span">BROWNBAG</HeaderStyle><HeaderStyle type="container-center-span">RANDOM</HeaderStyle><HeaderStyle type="container-center-span">MUSIC</HeaderStyle><HeaderStyle type="container-center-span">ANNOUNCEMENTS</HeaderStyle>
        </HeaderStyle>
        <HeaderStyle type="container-right">
          <HeaderStyle>LOG IN</HeaderStyle>
        </HeaderStyle>
      </HeaderStyle>
    </HeaderStyle>
  )
}

export default TopBar;