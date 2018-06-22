import React from 'react';
import styled from 'styled-components'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const StyledTopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
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
const StyledContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`

const StyledContLeftSpan = styled.div`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`

const StyledContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`

const StyledContCenterSpan = styled.div`
  cursor: pointer;
  margin-right: 5%;
  &:last-child {
    margin-right:0;
  }
  &:hover{
    text-decoration: underline;
  }
`

const StyledContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`
const StyledContRightSpan = styled.div`
  cursor: pointer;
`


const TopBar = () => {
  return (
    <StyledTopBar>
      <StyledContainer>
        <StyledContainerLeft>
          <StyledContLeftSpan>TOPICS</StyledContLeftSpan><StyledContLeftSpan>SEARCH</StyledContLeftSpan>
        </StyledContainerLeft>
        <StyledContainerCenter>
          <StyledContCenterSpan>GENERAL</StyledContCenterSpan><StyledContCenterSpan>BROWNBAG</StyledContCenterSpan><StyledContCenterSpan>RANDOM</StyledContCenterSpan><StyledContCenterSpan>MUSIC</StyledContCenterSpan><StyledContCenterSpan>ANNOUNCEMENTS</StyledContCenterSpan>
        </StyledContainerCenter>
        <StyledContainerRight>
          <StyledContRightSpan>LOG IN</StyledContRightSpan>
        </StyledContainerRight>
      </StyledContainer>
    </StyledTopBar>
  )
}

export default TopBar;