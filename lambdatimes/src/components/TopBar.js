import React from 'react';
import styled from 'styled-components';

const Topbar = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;
`
const TopbarContainer = styled.div `
width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`
const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`
const ContainerLeftSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`
const ContainerCenter = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: row;
flex: 3;
font-size: 9px;
`
const ContainerCenterSpan = styled.span`
cursor: pointer;
margin-right: 5%;
`
const ContainerCenterLastSpan = styled.span`
margin-right: 0;
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
const ContainerRightSpan = styled.span`
cursor: pointer;
`

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <Topbar>
      <TopbarContainer>
        <ContainerLeft>
        <ContainerLeftSpan>
        <ContainerCenterSpan>
          <span>TOPICS</span>
          <ContainerCenterLastSpan>
          <span>SEARCH</span>
          </ContainerCenterLastSpan>
          </ContainerCenterSpan>
          </ContainerLeftSpan>
        </ContainerLeft>
        <ContainerCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </ContainerCenter>
        <ContainerRight>
        <ContainerRightSpan>
          <span>LOG IN</span>
          </ContainerRightSpan>
        </ContainerRight>
        </TopbarContainer>
     </Topbar>
  )
}

export default TopBar;