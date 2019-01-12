import React from 'react';
import styled from 'styled-components'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {

  const TopBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    position: fixed;
    height: 44px;
    background-color: #333;
  `
  const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;
  `

  const ContainerLeft = styled.div `
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;

  `
    const ContainerSpan = styled.span `
      cursor: pointer;
      margin-right: 5%;
    `

  const ContainerCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;
  `

  const ContainerRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    font-weight: bold;
  `



  return (
    <TopBar>
      <Container>

          <ContainerLeft>
            <ContainerSpan>TOPICS</ContainerSpan>
            <ContainerSpan>SEARCH</ContainerSpan>
          </ContainerLeft>

          <ContainerCenter>
            <ContainerSpan>GENERAL</ContainerSpan>
            <ContainerSpan>BROWNBAG</ContainerSpan>
            <ContainerSpan>RANDOM</ContainerSpan>
            <ContainerSpan>MUSIC</ContainerSpan>
            <ContainerSpan>ANNOUNCEMENTS</ContainerSpan>
          </ContainerCenter>

          <ContainerRight>
            <ContainerSpan>LOG IN</ContainerSpan>
          </ContainerRight>
       </Container>
    </TopBar>
  )
}

export default TopBar;