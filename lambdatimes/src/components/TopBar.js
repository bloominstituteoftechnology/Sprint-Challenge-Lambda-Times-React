import React from 'react';
import {TopBarStyle, Container, ContainerLeft, LeftSpan, CenterContainer, CenterSpan, RightContainer, RightSpan} from './StyledComponents';


const TopBar = () => {
  return (
    <TopBarStyle>
      <Container>
        <ContainerLeft>
          <LeftSpan>TOPICS</LeftSpan><LeftSpan>SEARCH</LeftSpan>
        </ContainerLeft>
        <CenterContainer>
          <CenterSpan>GENERAL</CenterSpan><CenterSpan>BROWNBAG</CenterSpan><CenterSpan>RANDOM</CenterSpan><CenterSpan>MUSIC</CenterSpan><CenterSpan>ANNOUNCEMENTS</CenterSpan>
        </CenterContainer>
        <RightContainer>
          <RightSpan>LOG IN</RightSpan>
        </RightContainer>
      </Container>
    </TopBarStyle>
  )
}

export default TopBar;