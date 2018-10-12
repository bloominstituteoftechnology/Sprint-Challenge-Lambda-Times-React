import React from 'react';
import styled from 'styled-components';

const StyledTopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
  div
`

const StyledContainer = styled.div`
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
const StyledLeftContainer = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`
const StyledLeftSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`
const StyledCenterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex: 3;
font-size: 9px;
`
const StyledCenterSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;
  :last-child {
    margin-right: 0;
  }
  :hover {
    text-decoration: underline;
  }
`
const StyledRightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`
const StyledRightSpan = styled.span`
  cursor: pointer;
`


const TopBar = () => {
  return (
    <StyledTopBar>
      <StyledContainer>
        <StyledLeftContainer>
          <StyledLeftSpan>TOPICS</StyledLeftSpan><StyledLeftSpan>SEARCH</StyledLeftSpan>
        </StyledLeftContainer>
        <StyledCenterContainer>
          <StyledCenterSpan>GENERAL</StyledCenterSpan><StyledCenterSpan>BROWNBAG</StyledCenterSpan><StyledCenterSpan>RANDOM</StyledCenterSpan><StyledCenterSpan>MUSIC</StyledCenterSpan><StyledCenterSpan>ANNOUNCEMENTS</StyledCenterSpan>
        </StyledCenterContainer>
        <StyledRightContainer>
          <StyledRightSpan>LOG IN</StyledRightSpan>
        </StyledRightContainer>
      </StyledContainer>
    </StyledTopBar>
  )
}

export default TopBar;