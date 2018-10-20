import React from 'react';
import {TopBarStyle, Container, ContainerLeft, LeftSpan, CenterContainer, CenterSpan, RightContainer, RightSpan} from './StyledComponents';


class TopBar extends React.Component {
  constructor(){
    super();
  }

  logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  }

  render(){
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
            <RightSpan onClick={this.logout}>LOG OUT</RightSpan>
          </RightContainer>
        </Container>
      </TopBarStyle>
    )
  }
}

export default TopBar;