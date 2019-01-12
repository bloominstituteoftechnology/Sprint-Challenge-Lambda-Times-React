import React from 'react';
import styled from 'styled-components'
import StyledTopBar from "./StyledTopBar"
import StyledTopBarContainer from "./StyledTopBarContainer"
import StyledTopBarContainerLeft from "./StyledTopBarContainerLeft"
import StyledTopBarContainerRight from "./StyledTopBarContainerRight"
import StyledTopBarContainerCenter from "./StyledTopBarContainerCenter"
import LeftSpan from "./LeftSpan"
import RightSpan from "./RightSpan"
import CenterSpan from "./CenterSpan"


// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <StyledTopBar>
      <StyledTopBarContainer>
        <StyledTopBarContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </StyledTopBarContainerLeft>
        <StyledTopBarContainerCenter>
          <LeftSpan>GENERAL</LeftSpan><CenterSpan>BROWNBAG</CenterSpan><CenterSpan>RANDOM</CenterSpan><CenterSpan>MUSIC</CenterSpan><RightSpan>ANNOUNCEMENTS</RightSpan>
        </StyledTopBarContainerCenter>
        <StyledTopBarContainerRight>
          <span>LOG IN</span>
        </StyledTopBarContainerRight>
      </StyledTopBarContainer>
    </StyledTopBar>
  )
}

export default TopBar;