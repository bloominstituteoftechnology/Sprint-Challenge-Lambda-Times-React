import React from 'react';
import { StyledTopBar, StyledContainer,
  ContainerLeft, ContainerCenter, ContainerRight } from './Styles';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file


const TopBar = () => {
  return (
    <StyledTopBar>
      <StyledContainer>
        <ContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </ContainerLeft>
        <ContainerCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </ContainerCenter>
        <ContainerRight>
          <span>LOG IN</span>
        </ContainerRight>
      </StyledContainer>
    </StyledTopBar>
  )
}

export default TopBar;