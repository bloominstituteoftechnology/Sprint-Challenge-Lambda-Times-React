import React from 'react';
import styled from 'styled-components';

const StyledTopBar = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;
`;

const TopBarContainer = styled.div`
width: 100%;
display: flex;
justify-content: none;
align-items: none;
flex-direction: row;
color: #fff;
letter-spacing: 1px;
padding: 0 10px;

@media (min-width: 1280px) {
    width: 1280px;
}
`;

//In the following styles "TB" stands for "Top Bar"
const TBLeftContainer = styled.div`
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
`;

const LeftSpan = styled.span`
cursor: pointer;
margin-right: 25%;
font-weight: bold;
`;

const TBCenterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex: 3;
font-size: 9px;
`;

const CenterSpan = styled.span`
cursor: pointer;
margin-right: 5%;

&:last-child {
  margin-right: 0;
}

&:hover {
  text-decoration: underline;
}
`;

const TBRightContainer = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
font-weight: bold;
`;

const RightSpan = styled.span`
cursor: pointer;
`;
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <StyledTopBar>
      <TopBarContainer>
        <TBLeftContainer>
          <LeftSpan>TOPICS</LeftSpan><LeftSpan>SEARCH</LeftSpan>
        </TBLeftContainer>
        <TBCenterContainer>
          <CenterSpan>GENERAL</CenterSpan><CenterSpan>BROWNBAG</CenterSpan><CenterSpan>RANDOM</CenterSpan><CenterSpan>MUSIC</CenterSpan><CenterSpan>ANNOUNCEMENTS</CenterSpan>
        </TBCenterContainer>
        <TBRightContainer>
          <RightSpan>LOG IN</RightSpan>
        </TBRightContainer>
      </TopBarContainer>
    </StyledTopBar>
  )
}

export default TopBar;
