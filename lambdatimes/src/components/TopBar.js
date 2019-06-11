import React from 'react';
import styled, { css } from 'styled-components';
import {SpanStyle} from "./TopBarStyling";
import {ContainerCenter} from "./TopBarStyling";
import {ContainerLeftSpan} from "./TopBarStyling";
import {ContainerLeft} from "./TopBarStyling";
import {ContainerRightSpan} from "./TopBarStyling";
import {Container} from "./TopBarStyling";
import {Top} from "./TopBarStyling";

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <Top>
      <Container>
        <ContainerLeft>
          <ContainerLeftSpan>TOPICS</ContainerLeftSpan><ContainerLeftSpan>SEARCH</ContainerLeftSpan>
        </ContainerLeft>

        <ContainerCenter>

          <SpanStyle>GENERAL</SpanStyle><SpanStyle>BROWNBAG</SpanStyle><SpanStyle>RANDOM</SpanStyle><SpanStyle>MUSIC</SpanStyle><SpanStyle>ANNOUNCEMENTS</SpanStyle>
       
        </ContainerCenter>

        <ContainerRightSpan>
          <ContainerRightSpan>LOG IN</ContainerRightSpan>
        </ContainerRightSpan>
      </Container>
    </Top>
  )
}

export default TopBar;