import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Topbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const TopContainer = styled.div`
width: 100%;
display: flex;
justify-content: none;
align-items: none;
flex-direction: row;
color: #fff;
letter-spacing: 1px;
padding: 0 10px;
`;

const Topleft = styled.div`
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;`;

const Topcenter = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex: 3;
font-size: 9px;`;

const Topright = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
font-weight: bold;`;

const Topleftspan = styled.span`
cursor: pointer;
margin-right: 25%;
font-weight: bold;`;

const Topcenterspan = styled.span`
cursor: pointer;
margin-right: 5%;`;

const Toprightspan = styled.span`
cursor: pointer;`;

const TopBar = () => {
  return (
    <Topbar>
      <TopContainer>
        <Topleft>
          <Topleftspan>TOPICS</Topleftspan><Topleftspan>SEARCH</Topleftspan>
        </Topleft>
        <Topcenter>
          <Topcenterspan>GENERAL</Topcenterspan><Topcenterspan>BROWNBAG</Topcenterspan><Topcenterspan>RANDOM</Topcenterspan><Topcenterspan>MUSIC</Topcenterspan><Topcenterspan>ANNOUNCEMENTS</Topcenterspan>
        </Topcenter>
        <Topright>
          <Toprightspan>LOG IN</Toprightspan>
        </Topright>
      </TopContainer>
    </Topbar>
  )
}

export default TopBar;