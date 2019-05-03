import React from 'react';
import styled from 'styled-components';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file


const TopBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const ContainerWrapper = styled.div`
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
    };
`;

const ContLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const ContLeftSpan = styled.div`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const ContCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const ContCenterSpan = styled.div`
  cursor: pointer;
  margin-right: 5%;
   :last-child {
    margin-right: 0;
  };
  :hover {
    text-decoration: underline;
  };
`;

const ContRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
;`

const ContRightSpan = styled.div`
cursor: pointer;
`;




const TopBar = () => {
  return (
    <TopBarWrapper>
      <ContainerWrapper>
        <ContLeft>
          <ContLeftSpan>TOPICS</ContLeftSpan>
          <ContLeftSpan>SEARCH</ContLeftSpan>
        </ContLeft>
        <ContCenter>
          <ContCenterSpan>GENERAL</ContCenterSpan>
          <ContCenterSpan>BROWNBAG</ContCenterSpan>
          <ContCenterSpan>RANDOM</ContCenterSpan>
          <ContCenterSpan>MUSIC</ContCenterSpan>
          <ContCenterSpan>ANNOUNCEMENTS</ContCenterSpan>
        </ContCenter>
        <ContRight>
          <ContRightSpan>LOG IN</ContRightSpan>
        </ContRight>
      </ContainerWrapper>
    </TopBarWrapper>
  )
}

export default TopBar;