import React from "react";
import {
  TopBarStyled,
  TopBarContainer,
  TBCLeft,
  TBCLeftSpan,
  TBCCenter,
  TBCCenterSpan,
  TBCRight,
  TBCRightSpan
} from "./Styled/Styled";
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarStyled>
      <TopBarContainer>
        <TBCLeft>
          <TBCLeftSpan>TOPICS</TBCLeftSpan>
          <TBCLeftSpan>SEARCH</TBCLeftSpan>
        </TBCLeft>
        <TBCCenter>
          <TBCCenterSpan>GENERAL</TBCCenterSpan>
          <TBCCenterSpan>BROWNBAG</TBCCenterSpan>
          <TBCCenterSpan>RANDOM</TBCCenterSpan>
          <TBCCenterSpan>MUSIC</TBCCenterSpan>
          <TBCCenterSpan>ANNOUNCEMENTS</TBCCenterSpan>
        </TBCCenter>
        <TBCRight>
          <TBCRightSpan>LOG IN</TBCRightSpan>
        </TBCRight>
      </TopBarContainer>
    </TopBarStyled>
  );
};

export default TopBar;
