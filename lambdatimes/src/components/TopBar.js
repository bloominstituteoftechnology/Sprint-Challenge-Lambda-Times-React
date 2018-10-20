import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBarDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    position: fixed;
    height: 44px;
    background-color: #333;
`;
const TopBarContainerDiv = styled.div`
width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;
const TopBarContainerLeft = styled.div`
 display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;
const TopBarContainerLeftSpan = styled.span`
 cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;
const TopBarContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;
const TopBarContainerCenterSpan = styled.span`
    cursor: pointer;
    margin-right: 5%;
    ${TopBarContainerCenterSpan}:hover {
        text-decoration: underline;
    }
`;
const TopBarContainerRightDiv = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;
const TopBarContainerRightspan = styled.span`
cursor: pointer;
`;
const TopBarContainerSpanLast = styled.span`
margin: 0;
cursor: pointer;
${TopBarContainerSpanLast}:hover {text-decoration: underline;}
`;

const TopBar = () => {
  return (
    <TopBarDiv>
      <TopBarContainerDiv>
        <TopBarContainerLeft>
          <TopBarContainerLeftSpan>TOPICS</TopBarContainerLeftSpan><TopBarContainerLeftSpan>SEARCH</TopBarContainerLeftSpan>
        </TopBarContainerLeft>
        <TopBarContainerCenter>
          <TopBarContainerCenterSpan>GENERAL</TopBarContainerCenterSpan><TopBarContainerCenterSpan>BROWNBAG</TopBarContainerCenterSpan><TopBarContainerCenterSpan>RANDOM</TopBarContainerCenterSpan><TopBarContainerCenterSpan>MUSIC</TopBarContainerCenterSpan><TopBarContainerSpanLast>ANNOUNCEMENTS</TopBarContainerSpanLast>
        </TopBarContainerCenter>
        <TopBarContainerRightDiv>
          <TopBarContainerRightspan>LOG IN</TopBarContainerRightspan>
        </TopBarContainerRightDiv>
      </TopBarContainerDiv>
    </TopBarDiv>
  )
}

export default TopBar;