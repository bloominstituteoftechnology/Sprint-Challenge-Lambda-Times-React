import React from "react";
import {
  TopBarWrapper,
  TopBarContainer,
  TopBarContainerLeft,
  ContainerCenter,
  TopBarContainerRight
} from "./Content/Styled";

const TopBar = () => {
  return (
    <TopBarWrapper>
      <TopBarContainer>
        <TopBarContainerLeft>
          <span>TOPICS</span>
          <span>SEARCH</span>
        </TopBarContainerLeft>
        <ContainerCenter>
          <span>GENERAL</span>
          <span>BROWNBAG</span>
          <span>RANDOM</span>
          <span>MUSIC</span>
          <span>ANNOUNCEMENTS</span>
        </ContainerCenter>
        <TopBarContainerRight>
          <span>LOG IN</span>
        </TopBarContainerRight>
      </TopBarContainer>
    </TopBarWrapper>
  );
};

export default TopBar;
