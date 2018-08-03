import React from 'react';
import ContainerLeft from './TopBar/ContainerLeft';
import ContainerCenter from './TopBar/ContainerCenter';
import ContainerRight from './TopBar/ContainerRight';
import Container from './TopBar/Container';
import TopBarStyle from './TopBar/TopBarStyle';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarStyle>
      <Container>
        <ContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </ContainerLeft>
        <ContainerCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </ContainerCenter>
        <ContainerRight>
          <span>LOG IN</span>
        </ContainerRight>
      </Container>
    </TopBarStyle>
  )
}

export default TopBar;