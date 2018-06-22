import React from 'react';
import styled from "styled-components";

// Refactor this component to use styled components and not classNames. 
const TopBarStyle = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;
`;
const TopBarCont = styled.div`
width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;
const TopBarContL = styled.div`
display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;
const TopBarContLSpan = styled.div`
cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;
const TopBarContC = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;
const TopBarContCSpan = styled.div`
cursor: pointer;
  margin-right: 5%;
  &:hover ${TopBarContCSpan} {
    text-decoration: underline;
  }
`;
const TopBarContR = styled.div`
display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;
const TopBarContRSpan = styled.div`
cursor: pointer;
`;
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarStyle > 
      <TopBarCont >
        <TopBarContL >
          <TopBarContLSpan>TOPICS</TopBarContLSpan><TopBarContLSpan>SEARCH</TopBarContLSpan>
        </TopBarContL>
        <TopBarContC >
          <TopBarContCSpan>GENERAL</TopBarContCSpan><TopBarContCSpan>BROWNBAG</TopBarContCSpan><TopBarContCSpan>RANDOM</TopBarContCSpan><TopBarContCSpan>MUSIC</TopBarContCSpan><TopBarContCSpan>ANNOUNCEMENTS</TopBarContCSpan>
        </TopBarContC>
        <TopBarContR >
          <TopBarContRSpan>LOG IN</TopBarContRSpan>
        </TopBarContR>
      </TopBarCont>
    </TopBarStyle>
  )
}

export default TopBar;