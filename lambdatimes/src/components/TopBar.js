import React from 'react';
import {StyledTopBar, StyledContainter, StyledContainterLeft, StyledContainterCenter, StyledContainterRight} from './StyledComponents';

const TopBar = () => {
  return (

    <StyledTopBar>
      <StyledContainter>
        <StyledContainterLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </StyledContainterLeft>
        <StyledContainterCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </StyledContainterCenter>
        <StyledContainterRight>
          <span>LOG IN</span>
        </StyledContainterRight>
      </StyledContainter>
    </StyledTopBar>
  )
}

export default TopBar;