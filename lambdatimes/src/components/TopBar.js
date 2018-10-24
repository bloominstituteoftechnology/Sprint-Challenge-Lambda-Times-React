import React from 'react';
import Style from 'styled-components';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarDiv>
      <ContainerDiv>
        <ContainerLeftDiv>
          <ContainerLeftSpan>TOPICS</ContainerLeftSpan><ContainerLeftSpan>SEARCH</ContainerLeftSpan>
        </ContainerLeftDiv>
        <ContainerCenterDiv>
          <ContainerCenterSpan>GENERAL</ContainerCenterSpan><ContainerCenterSpan>BROWNBAG</ContainerCenterSpan><ContainerCenterSpan>RANDOM</ContainerCenterSpan><ContainerCenterSpan>MUSIC</ContainerCenterSpan><ContainerCenterLastSpan>ANNOUNCEMENTS</ContainerCenterLastSpan>
        </ContainerCenterDiv>
        <ContainerRightDiv>
          <ContainerRightSpan>LOG IN</ContainerRightSpan>
        </ContainerRightDiv>
      </ContainerDiv>
    </TopBarDiv>
  )
}

export default TopBar;

 /* Component Styles */

 const TopBarDiv = Style.div`
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: none;
 flex-direction: row;
 position: fixed;
 height: 44px;
 background-color: #333;
 `;

 const ContainerDiv = Style.div`
 width: 100%;
 display: flex;
 justify-content: none;
 align-items: none;
 flex-direction: row;
 color: #fff;
 letter-spacing: 1px;
 padding: 0 10px;
 `;

 const ContainerLeftDiv = Style.div`
 display: flex;
 justify-content: none;
 align-items: center;
 flex-direction: row;
 flex: 1;
 font-size: 11px;
 `;

 const ContainerLeftSpan = Style.span`
 cursor: pointer;
 margin-right: 25%;
 font-weight: bold;
 `;

 const ContainerCenterDiv = Style.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: row;
 flex: 3;
 font-size: 9px;
 `;

 const ContainerCenterSpan = Style.span`
 cursor: pointer;
 margin-right: 5%;
 `;

const ContainerCenterLastSpan = Style.span`
cursor: pointer;
margin-right: 5%;
margin-right: 0;
 `;

 const ContainerRightDiv = Style.span`
 display: flex;
 justify-content: flex-end;
 align-items: center;
 flex-direction: row;
 flex: 1;
 font-size: 11px;
 font-weight: bold;
 `;

 const ContainerRightSpan = Style.span`
cursor: pointer;
 `;
