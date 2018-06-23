import React from 'react';
import {TopBarBox, Container, ContainerLeft, ContainerCenter, ContainerRight} from '../CSS/ReusableStyles';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = props => {
  return (
    <TopBarBox>
      <Container>
        <ContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </ContainerLeft>
        <ContainerCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </ContainerCenter>
        <ContainerRight>
          <span onClick={() => props.handleLogOut()}>{localStorage.getItem("username").toUpperCase()}</span>
        </ContainerRight>
      </Container>
    </TopBarBox>
  )
}

export default TopBar;