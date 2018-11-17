import React from "react";
import {
  TopBarParContainer,
  TopBarContainer,
  ContainerLeft,
  ContainerCenter,
  ContainerRight,
  Spans
} from "../CSS/Styles";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarParContainer>
      <TopBarContainer>
        <ContainerLeft>
          <Spans left>TOPICS</Spans>
          <Spans left>SEARCH</Spans>
        </ContainerLeft>

        <ContainerCenter>
          <Spans center>GENERAL</Spans>
          <Spans center>BROWNBAG</Spans>
          <Spans center>RANDOM</Spans>
          <Spans center>MUSIC</Spans>
          <Spans center>ANNOUNCEMENTS</Spans>
        </ContainerCenter>

        <ContainerRight>
          <Spans right>LOG IN</Spans>
        </ContainerRight>
      </TopBarContainer>
    </TopBarParContainer>
  );
};

export default TopBar;
