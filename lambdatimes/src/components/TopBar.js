import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBarStyle = styled.div`

`;

const Container = styled.div`

`;

const ContainerLeft = styled.div`

`;

const ContainerCenter = styled.div`

`;

const ContainerRight = styled.div`

`;

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