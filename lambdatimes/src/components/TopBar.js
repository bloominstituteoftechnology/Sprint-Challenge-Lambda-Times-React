import React from 'react';
import styled from 'styled-components';

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

const StyledTopBarContainer = styled.div`
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

const StyledTopBarContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const StyledTopBarContainerLeftSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const StyledTopBarContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`

const StyledTopBarContainerCenterSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;

  &:last-child {
  margin-right: 0;
}

  &:hover {
    text-decoration: underline;
  }
`

const StyledTopBarContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`

const StyledTopBarContainerRightSpan = styled.span`
cursor: pointer;
`

const TopBar = () => {
  return (
    <StyledTopBar>
      <StyledTopBarContainer>
        <StyledTopBarContainerLeft>
          <StyledTopBarContainerLeftSpan>TOPICS</StyledTopBarContainerLeftSpan><StyledTopBarContainerLeftSpan>SEARCH</StyledTopBarContainerLeftSpan>
        </StyledTopBarContainerLeft>
        <StyledTopBarContainerCenter>
          <StyledTopBarContainerCenterSpan>GENERAL</StyledTopBarContainerCenterSpan><StyledTopBarContainerCenterSpan>BROWNBAG</StyledTopBarContainerCenterSpan><StyledTopBarContainerCenterSpan>RANDOM</StyledTopBarContainerCenterSpan><StyledTopBarContainerCenterSpan>MUSIC</StyledTopBarContainerCenterSpan><StyledTopBarContainerCenterSpan>ANNOUNCEMENTS</StyledTopBarContainerCenterSpan>
        </StyledTopBarContainerCenter>
        <StyledTopBarContainerRight>
          <StyledTopBarContainerRightSpan>LOG IN</StyledTopBarContainerRightSpan>
        </StyledTopBarContainerRight>
      </StyledTopBarContainer>
    </StyledTopBar>
  )
}

export default TopBar;