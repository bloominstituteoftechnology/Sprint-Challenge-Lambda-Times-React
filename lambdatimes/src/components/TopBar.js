import React from 'react';
import styled, { css } from 'styled-components'

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const Container = styled.div`
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

const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const SpanC = styled.span`
  cursor: pointer;
  margin-right: 5%;

  ${props => props.last && css`
    margin-right: 0;
  `}

  &:hover {
    text-decoration: underline;
  }
`;

const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;

  ${props => props.span && css`
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
  `}
`;

const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
  
  ${props => props.span && css`
    cursor: pointer;
  `}
`;


const TopBar = () => {
  return (
    <TopContainer>
      <Container>
        <ContainerLeft>
          <ContainerLeft>TOPICS</ContainerLeft><ContainerLeft>SEARCH</ContainerLeft>
        </ContainerLeft>
        <ContainerCenter>
          <SpanC>GENERAL</SpanC><SpanC >BROWNBAG</SpanC><SpanC>RANDOM</SpanC><SpanC>MUSIC</SpanC><SpanC last>ANNOUNCEMENTS</SpanC>
        </ContainerCenter>
        <ContainerRight>
          <ContainerRight>LOG IN</ContainerRight>
        </ContainerRight>
      </Container>
    </TopContainer>
  )
}

export default TopBar;