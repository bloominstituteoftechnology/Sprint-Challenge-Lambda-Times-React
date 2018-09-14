import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBarDiv = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`

const TopBarDivContainer = styled.div `
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

const TopBarDivContainerLeft = styled.div `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`

const TopBarContainerLeftSpan = styled.span `
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`

const TopBarContainerCenter = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`

const TopBarContainerCenterSpan = styled.span `
  cursor: pointer;
  margin-right: 5%;
  &:hover {
    text-dectoration: underline;
  }
`

const TopBarContainerCenterSpanLastChildHover = styled.span`
cursor: pointer;
margin-right: 0;
`

const TopBarContainerRight = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`

const TopBarContainerRightSpan = styled.span `
  cursor: pointer;
`

const TopBar = () => {
  return (
    <TopBarDiv>
      <TopBarDivContainer>
        <TopBarDivContainerLeft>
          <TopBarContainerLeftSpan>TOPICS</TopBarContainerLeftSpan><TopBarContainerLeftSpan>SEARCH</TopBarContainerLeftSpan>
        </TopBarDivContainerLeft>
        <TopBarContainerCenter>
          <TopBarContainerCenterSpan>GENERAL</TopBarContainerCenterSpan><TopBarContainerCenterSpan>BROWNBAG</TopBarContainerCenterSpan><TopBarContainerCenterSpan>RANDOM</TopBarContainerCenterSpan><TopBarContainerCenterSpan>MUSIC</TopBarContainerCenterSpan><TopBarContainerCenterSpanLastChildHover>ANNOUNCEMENTS</TopBarContainerCenterSpanLastChildHover>
        </TopBarContainerCenter>
        <TopBarContainerRight>
          <TopBarContainerRightSpan>LOG IN</TopBarContainerRightSpan>
        </TopBarContainerRight>
      </TopBarDivContainer>
    </TopBarDiv>
  )
}

export default TopBar;