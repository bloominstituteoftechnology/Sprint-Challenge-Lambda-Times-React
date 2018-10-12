import React from 'react';
import {TopBarDiv, Container, SubContainer, SubContainerSpan} from "./Styles";

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarDiv>
      <Container>
        <SubContainer>
          <SubContainerSpan>TOPICS</SubContainerSpan><SubContainerSpan>SEARCH</SubContainerSpan>
        </SubContainer>
        <SubContainer center>
          <SubContainerSpan center>GENERAL</SubContainerSpan><SubContainerSpan center>BROWNBAG</SubContainerSpan><SubContainerSpan center>RANDOM</SubContainerSpan><SubContainerSpan center>MUSIC</SubContainerSpan><SubContainerSpan center>ANNOUNCEMENTS</SubContainerSpan>
        </SubContainer>
        <SubContainer right>
          <SubContainerSpan right>LOG IN</SubContainerSpan>
        </SubContainer>
      </Container>
    </TopBarDiv>
  )
}

export default TopBar;