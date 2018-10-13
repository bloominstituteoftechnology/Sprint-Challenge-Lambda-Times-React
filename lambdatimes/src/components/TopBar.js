import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

export const StyledTopBar = styled.div`
display: flex;
width: 100%;
background-color: grey;
`;

export const TopBarContainerLeft = styled.div`
display: flex;
width: 100%;
color: white;
`;

export const TopBarContainerCenter = styled.div`
display: flex;
width: 100%;
color: white;
`;

export const TopBarContainerRight = styled.div`
display: flex;
width: 100%;
color: white;
`;

export const Container = styled.div`
display: flex;
width: 100%;
color: white;
padding: 0 20px;
`;

const TopBar = () => {
  return (
    <StyledTopBar>
      <Container>
        <TopBarContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </TopBarContainerLeft>
        <TopBarContainerCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
          </TopBarContainerCenter>
          <TopBarContainerCenter>
          <span>LOG IN</span>
          </TopBarContainerCenter>
        </Container>
    </StyledTopBar>
  )
}

export default TopBar;