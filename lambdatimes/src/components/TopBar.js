import React from 'react';

import { TopBarWrapper, TopBarContainer, ContainerLeft, ContainerLeftSpan, ContainerCenter, ContainerCenterSpan, CenterSpanLastchild, ContainerRight, ContainerRightSpan } from '../TopBarStyled'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarWrapper>
      <TopBarContainer>
        <ContainerLeft>
          <ContainerLeftSpan>TOPICS</ContainerLeftSpan><ContainerLeftSpan>SEARCH</ContainerLeftSpan>
        </ContainerLeft>
        <ContainerCenter>
          <ContainerCenterSpan>GENERAL</ContainerCenterSpan><ContainerCenterSpan>BROWNBAG</ContainerCenterSpan><ContainerCenterSpan>RANDOM</ContainerCenterSpan><ContainerCenterSpan>MUSIC</ContainerCenterSpan><CenterSpanLastchild>ANNOUNCEMENTS</CenterSpanLastchild>
        </ContainerCenter>
        <ContainerRight>
          <ContainerRightSpan>LOG IN</ContainerRightSpan>
        </ContainerRight>
      </TopBarContainer>
    </TopBarWrapper>
  )
}

export default TopBar;