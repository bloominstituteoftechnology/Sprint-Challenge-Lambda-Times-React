import React from 'react';
import Styled from 'styled-components';
import {InnerContainer} from './ReusableStyles/Reusables';

const Topbar = Styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;
`;

const TopbarContainer = Styled.div`
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

const LeftSpan = Styled.span`
cursor: pointer;
margin-right: 25%;
font-weight: bold;
`;

const RightSpan = Styled.span`
cursor: pointer;
`;

const CenterSpan = Styled.span`
cursor: pointer;
margin-right: 5%;
:last-child {
  margin-right: 0;
}
:hover {
  text-decoration: underline;
}
`;

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <Topbar>
      <TopbarContainer>
        <InnerContainer left>
          <LeftSpan>TOPICS</LeftSpan><LeftSpan>SEARCH</LeftSpan>
        </InnerContainer>
        <InnerContainer center>
          <CenterSpan>GENERAL</CenterSpan><CenterSpan>BROWNBAG</CenterSpan><CenterSpan>RANDOM</CenterSpan><CenterSpan>MUSIC</CenterSpan><CenterSpan>ANNOUNCEMENTS</CenterSpan>
        </InnerContainer>
        <InnerContainer right>
          <RightSpan>LOG IN</RightSpan>
        </InnerContainer>
      </TopbarContainer>
    </Topbar>
  )
}

export default TopBar;