import React from 'react';
// import '../../src/CSS/index.css';
import style from 'styled-components';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopTopBar = style.div`
    width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const Container = style.div`
    .top-bar .container {
    width: 1280px;
`;

const ContainerLeft = style.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const ContainerLeftSpan = style.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const ContainerCenter = style.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const ContainerCenterSpan = style.span`
        cursor: pointer;
  margin-right: 5%;
`;

const ContainerRight = style.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const ContainerRightSpan = style.span`
cursor: pointer;
`;


const TopBar = () => {
  return (
    <TopTopBar>
      <Container>
        <ContainerLeft>
          <ContainerLeftSpan>TOPICS</ContainerLeftSpan><ContainerLeftSpan>SEARCH</ContainerLeftSpan>
        </ContainerLeft>
        <ContainerCenter>
          <ContainerCenterSpan>GENERAL</ContainerCenterSpan><ContainerCenterSpan>BROWNBAG</ContainerCenterSpan><ContainerCenterSpan>RANDOM</ContainerCenterSpan><ContainerCenterSpan>MUSIC</ContainerCenterSpan><ContainerCenterSpan>ANNOUNCEMENTS</ContainerCenterSpan>
        </ContainerCenter>
        <ContainerRight>
          <ContainerRightSpan>LOG IN</ContainerRightSpan>
        </ContainerRight>
      </Container>
    </TopTopBar>
  )
}

export default TopBar;