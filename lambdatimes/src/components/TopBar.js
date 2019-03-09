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

// there must be a better way of doing it than this but this is what I'll go with since there's only 45 mins left:
export const TopBarContainerLeftSpan = styled.span`
margin-right: 25%;
`;


export const TopBarContainerCenter = styled.div`
display: flex;
width: 100%;
color: white;
`;

export const TopBarContainerCenterSpan = styled.span`
margin-right: 5%;
`;

export const TopBarContainerRight = styled.div`
display: flex;
width: 100%;
color: white;
margin-right: -20%;
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
          <TopBarContainerLeftSpan>TOPICS</TopBarContainerLeftSpan><TopBarContainerLeftSpan>SEARCH</TopBarContainerLeftSpan>
        </TopBarContainerLeft>
        <TopBarContainerCenter>
          <TopBarContainerCenterSpan>GENERAL</TopBarContainerCenterSpan><TopBarContainerCenterSpan>BROWNBAG</TopBarContainerCenterSpan><TopBarContainerCenterSpan>RANDOM</TopBarContainerCenterSpan><TopBarContainerCenterSpan>MUSIC</TopBarContainerCenterSpan><TopBarContainerCenterSpan>ANNOUNCEMENTS</TopBarContainerCenterSpan>
          </TopBarContainerCenter>
          <TopBarContainerRight>
          <span>LOG IN</span>
          </TopBarContainerRight>
        </Container>
    </StyledTopBar>
  )
}

export default TopBar;