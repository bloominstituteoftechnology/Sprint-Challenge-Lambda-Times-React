import React from 'react';
import Styled from 'styled-components';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file
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
    .top-bar .container {
      width: 1280px;
    }
  }
`;
const ContainerLeft = Styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;
const ContainerLeftSpan = Styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;
const ContainerCenter = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;
const ContainerCenterSpan = Styled.span`
  &:hover {text-decoration: underline;}
  cursor: pointer;
  margin-right: 5%;
`;
const ContainerCenterSpanLastChild = Styled.span`
  &:hover {text-decoration: underline;}
  cursor: pointer;
  margin-right: 5%;
  margin-right: 0;
`;
const ContainerRight = Styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;
const ContainerRightSpan = Styled.span`
  cursor: pointer;
`;
const TopBar = () => {
  return (
    <Topbar>
      <TopbarContainer>
        <ContainerLeft>
          <ContainerLeftSpan>TOPICS</ContainerLeftSpan>
          <ContainerLeftSpan>SEARCH</ContainerLeftSpan>
      </ContainerLeft>
        <ContainerCenter>
          <ContainerCenterSpan>GENERAL</ContainerCenterSpan>
          <ContainerCenterSpan>BROWNBAG</ContainerCenterSpan>
          <ContainerCenterSpan>RANDOM</ContainerCenterSpan>
          <ContainerCenterSpan>MUSIC</ContainerCenterSpan>
        <ContainerCenterSpanLastChild>ANNOUNCEMENTS</ContainerCenterSpanLastChild>
      </ContainerCenter>
        <ContainerRight>
          <ContainerRightSpan>LOG IN</ContainerRightSpan>
      </ContainerRight>
      </TopbarContainer>
    </Topbar>
  )
}

export default TopBar;
