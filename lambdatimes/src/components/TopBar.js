import React from 'react';
import {TopBars, Container, ContainerLeft, ContainerCenter, ContainerRight, SpanLike} from './Styles.js';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBars>
      <Container>
        <ContainerLeft>
          <SpanLike>TOPICS</SpanLike><SpanLike>SEARCH</SpanLike>
        </ContainerLeft>
        <ContainerCenter>
          <SpanLike>GENERAL</SpanLike><SpanLike>BROWNBAG</SpanLike><SpanLike>RANDOM</SpanLike><SpanLike>MUSIC</SpanLike><SpanLike>ANNOUNCEMENTS</SpanLike>
        </ContainerCenter>
        <ContainerRight>
          <SpanLike>LOG IN</SpanLike>
        </ContainerRight>
        </Container>
     </TopBars>
  )
}

export default TopBar;