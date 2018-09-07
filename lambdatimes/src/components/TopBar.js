import React from 'react';
import {TopbarWrapper, TopbarContainer, TopbarInner, TopbarInnerContent} from './styles';

const TopBar = () => {
  return (
    <TopbarWrapper>
      <TopbarContainer>
        <TopbarInner left>
          <TopbarInnerContent left>TOPICS</TopbarInnerContent><TopbarInnerContent left>SEARCH</TopbarInnerContent>
        </TopbarInner>
        <TopbarInner center>
          <TopbarInnerContent center>GENERAL</TopbarInnerContent><TopbarInnerContent center>BROWNBAG</TopbarInnerContent><TopbarInnerContent center>RANDOM</TopbarInnerContent><TopbarInnerContent center>MUSIC</TopbarInnerContent><TopbarInnerContent center>ANNOUNCEMENTS</TopbarInnerContent>
        </TopbarInner>
        <TopbarInner right>
          <TopbarInnerContent right>LOG IN</TopbarInnerContent>
        </TopbarInner>
      </TopbarContainer>
    </TopbarWrapper>
  )
}

export default TopBar;