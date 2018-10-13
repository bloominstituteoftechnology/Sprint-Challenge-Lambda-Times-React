import React from "react";
import {
  TopBarContainer,
  Container,
  ContainerLeft,
  ContainerCenter,
  ContainerRight,
  LeftSpan,
  CenterSpan,
  RightSpan
} from "./styles";

const TopBar = () => {
  return (
    <TopBarContainer>
      <Container>
        <ContainerLeft>
          <LeftSpan>TOPICS</LeftSpan>
          <LeftSpan>SEARCH</LeftSpan>
        </ContainerLeft>
        <ContainerCenter>
          <CenterSpan>GENERAL</CenterSpan>
          <CenterSpan>BROWNBAG</CenterSpan>
          <CenterSpan>RANDOM</CenterSpan>
          <CenterSpan>MUSIC</CenterSpan>
          <CenterSpan>ANNOUNCEMENTS</CenterSpan>
        </ContainerCenter>
        <ContainerRight>
          <RightSpan>LOG IN</RightSpan>
        </ContainerRight>
      </Container>
    </TopBarContainer>
  );
};

export default TopBar;
