import React from 'react'
import {
  MainTopbar,
  TopbarContainer,
  ContainerLeft,
  ContainerCenterSpan,
  ContainerCenter,
  LeftSpan,
  ContainerRight
} from './TopBarStyledComponents'
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <MainTopbar>
      <TopbarContainer>
        <ContainerLeft>
          <LeftSpan>TOPICS</LeftSpan>
          <LeftSpan>SEARCH</LeftSpan>
        </ContainerLeft>
        <ContainerCenter>
          <ContainerCenterSpan>GENERAL</ContainerCenterSpan>
          <ContainerCenterSpan>BROWNBAG</ContainerCenterSpan>
          <ContainerCenterSpan>RANDOM</ContainerCenterSpan>
          <ContainerCenterSpan>MUSIC</ContainerCenterSpan>
          <ContainerCenterSpan>ANNOUNCEMENTS</ContainerCenterSpan>
        </ContainerCenter>
        <ContainerRight>
          <span>LOG IN</span>
        </ContainerRight>
      </TopbarContainer>
    </MainTopbar>
  )
}

export default TopBar
