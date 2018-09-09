import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBarStyled = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const Container = styled.div `
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

const ContainerLeft = styled.div `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;  

const CLSpan = styled.span `
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const ContainerCenter = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const CCSpan = styled.span `
  cursor: pointer;
  margin-right: 5%;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const ContainerRight = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const CRSpan = styled.span `
  cursor: pointer;
`;

const TopBar = () => {
  return (
    <TopBarStyled>
      <Container>
        <ContainerLeft>
          <CLSpan>TOPICS</CLSpan><CLSpan>SEARCH</CLSpan>
        </ContainerLeft>
        <ContainerCenter>
          <CCSpan>GENERAL</CCSpan><CCSpan>BROWNBAG</CCSpan><CCSpan>RANDOM</CCSpan><CCSpan>MUSIC</CCSpan><CCSpan>ANNOUNCEMENTS</CCSpan>
        </ContainerCenter>
        <ContainerRight>
          <CRSpan>LOG IN</CRSpan>
        </ContainerRight>
      </Container>
    </TopBarStyled>
  )
}

export default TopBar;