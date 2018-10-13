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
`;

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
`;

const StyledContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const StyledContainerLeftSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const StyledContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const StyledContainerCenterSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledContainerLastCenterSpan = styled.span`
  cursor: pointer;
  margin-right: 0;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const StyledContainerRightSpan = styled.span`
  cursor: pointer;
`;

const TopBar = () => {
  return (
    <StyledTopBar>
      <StyledContainer>
        <StyledContainerLeft>
          <StyledContainerLeftSpan>TOPICS</StyledContainerLeftSpan><StyledContainerLeftSpan>SEARCH</StyledContainerLeftSpan>
        </StyledContainerLeft>
        <StyledContainerCenter>
          <StyledContainerCenterSpan>GENERAL</StyledContainerCenterSpan><StyledContainerCenterSpan>BROWNBAG</StyledContainerCenterSpan><StyledContainerCenterSpan>RANDOM</StyledContainerCenterSpan><StyledContainerCenterSpan>MUSIC</StyledContainerCenterSpan><StyledContainerLastCenterSpan>ANNOUNCEMENTS</StyledContainerLastCenterSpan>
        </StyledContainerCenter>
        <StyledContainerRight>
          <StyledContainerRightSpan>LOG IN</StyledContainerRightSpan>
        </StyledContainerRight>
      </StyledContainer>
    </StyledTopBar>
  )
}

export default TopBar;