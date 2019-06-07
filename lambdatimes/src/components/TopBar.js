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
`
const StyledContainerLeft = styled(StyledContainer)
`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`
const StyledContainerCenter = styled(StyledContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`
const StyledContainerRight = styled(StyledContainer)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`
const StyledSpanLeft = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`
const StyledSpanCenter = styled.span`
  cursor: pointer;
  margin-right: 5%;
  &:hover {
    text-decoration: underline;
  }
`
const StyledSpanRight = styled.span`
  cursor: pointer;
`
const TopBar = () => {
  return (
    <StyledTopBar>
      <StyledContainer>
        <StyledContainerLeft>
          <StyledSpanLeft>TOPICS</StyledSpanLeft>
          <StyledSpanLeft>SEARCH</StyledSpanLeft>
        </StyledContainerLeft>
        <StyledContainerCenter>
          <StyledSpanCenter>GENERAL</StyledSpanCenter>
          <StyledSpanCenter>BROWNBAG</StyledSpanCenter>
          <StyledSpanCenter>RANDOM</StyledSpanCenter>
          <StyledSpanCenter>MUSIC</StyledSpanCenter>
          <StyledSpanCenter>ANNOUNCEMENTS</StyledSpanCenter>
        </StyledContainerCenter>
        <StyledContainerRight>
          <StyledSpanRight>LOG IN</StyledSpanRight>
        </StyledContainerRight>
      </StyledContainer>
    </StyledTopBar>
  )
}

export default TopBar;