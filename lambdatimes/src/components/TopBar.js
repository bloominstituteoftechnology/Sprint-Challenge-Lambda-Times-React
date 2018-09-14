import React from 'react';
import styled from 'styled-components';

const Header = styled.div `
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
const ContLeft = styled.div `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`
const ContLSpan = styled.div `
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`
const ContCenter = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`
const CCSpan = styled.div `
  cursor: pointer;
  margin-right: 5%;
  & hover {
    text-decoration: underline;
  }
`
const CCSpanLast = styled.div `
  margin-right: 0;
  & hover {
    text-decoration: underline;
  }
`
const ContRight = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;
const CRSpan = styled.div `
  cursor: pointer;
`

const TopBar = () => {
  return (
    <Header>
      <Container>
        <ContLeft>
          <ContLSpan>TOPICS</ContLSpan><ContLSpan>SEARCH</ContLSpan>
        </ContLeft>
        <ContCenter>
          <CCSpan>GENERAL</CCSpan><CCSpan>BROWNBAG</CCSpan><CCSpan>RANDOM</CCSpan><CCSpan>MUSIC</CCSpan><CCSpanLast>ANNOUNCEMENTS</CCSpanLast>
        </ContCenter>
        <ContRight>
          <CRSpan>LOG IN</CRSpan>
        </ContRight>
      </Container>
    </Header>
  )
}

export default TopBar;