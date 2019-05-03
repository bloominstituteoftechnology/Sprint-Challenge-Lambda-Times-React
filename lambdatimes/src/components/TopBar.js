import React from 'react';
import {
  StyledTopBar,
  StyledTopBarContainer,
  StyledTopBarContainerLeft,
  StyledTopBarContainerCenter,
  StyledTopBarContainerRight,
  ContainerLeftSpan,
  ContainerCenterSpan,
  ContainerRightSpan
} from '../Styles/TopBarStyles';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <StyledTopBar>
      <StyledTopBarContainer>
        <StyledTopBarContainerLeft>
          <ContainerLeftSpan>TOPICS</ContainerLeftSpan>
          <ContainerLeftSpan>SEARCH</ContainerLeftSpan>
        </StyledTopBarContainerLeft>
        <StyledTopBarContainerCenter>
          <ContainerCenterSpan>GENERAL</ContainerCenterSpan>
          <ContainerCenterSpan>BROWNBAG</ContainerCenterSpan>
          <ContainerCenterSpan>RANDOM</ContainerCenterSpan>
          <ContainerCenterSpan>MUSIC</ContainerCenterSpan>
          <ContainerCenterSpan>ANNOUNCEMENTS</ContainerCenterSpan>
        </StyledTopBarContainerCenter>
        <StyledTopBarContainerRight>
          <ContainerRightSpan>LOG IN</ContainerRightSpan>
        </StyledTopBarContainerRight>
      </StyledTopBarContainer>
    </StyledTopBar>
  );
};

export default TopBar;

/* <div className="top-bar">
  <div className="container">
    <div className="container-left">
      <span>TOPICS</span><span>SEARCH</span>
    </div>
    <div className="container-center">
      <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
    </div>
    <div className="container-right">
      <span>LOG IN</span>
    </div>
  </div>
</div> */
