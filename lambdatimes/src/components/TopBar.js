import React from 'react';
import {SpanRight,SpanStyle,TopBarContainer, TopContainer, ContainerLeft, ContainerCenter,ContainerRight} from './ReusableStyles';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarContainer>
      <TopContainer>
        <ContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </ContainerLeft>
        <ContainerCenter>
          <SpanStyle>GENERAL</SpanStyle><SpanStyle>BROWNBAG</SpanStyle><SpanStyle>RANDOM</SpanStyle><SpanStyle>MUSIC</SpanStyle><SpanStyle>ANNOUNCEMENTS</SpanStyle>
        </ContainerCenter>
        <ContainerRight>
          <SpanRight>LOG IN</SpanRight>
        </ContainerRight>
      </TopContainer>
    </TopBarContainer>
  )
}

export default TopBar;
