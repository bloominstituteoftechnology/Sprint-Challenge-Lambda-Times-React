import React from 'react';
import styled from 'styled-components';

const TopBarr = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`

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
`

const ContainerLeft = styled.div `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`

const CLS = styled.span `
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`

const ContainerCenter = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`

const CCS = styled.span `
  cursor: pointer;
  margin-right: 5%;
    &:hover {
      text-decoration: underline;
    }
`

const CCSLastChild = styled(CCS) `margin-right: 0;`

const ContainerRight = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`

const CRS = styled.span `cursor: pointer;`

const TopBar = () => {
  return (
    <TopBarr>
      <Container>
        <ContainerLeft>
          <CLS>TOPICS</CLS>
          <CLS>SEARCH</CLS>
        </ContainerLeft>
        <ContainerCenter>
          <CCS>GENERAL</CCS>
          <CCS>BROWNBAG</CCS>
          <CCS>RANDOM</CCS>
          <CCS>MUSIC</CCS>
          <CCSLastChild>ANNOUNCEMENTS</CCSLastChild>
        </ContainerCenter>
        <ContainerRight>
          <CRS>LOG IN</CRS>
        </ContainerRight>
      </Container>
    </TopBarr>
  )
}

export default TopBar;