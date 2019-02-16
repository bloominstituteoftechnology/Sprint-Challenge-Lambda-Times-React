import React from "react";
import * as S from "../CSS/styles";
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <S.TopBar>
      <S.TopBarContainer>
        <S.TopBarContainerLeft>
          <S.TopBarContainerLeftSpan>TOPICS</S.TopBarContainerLeftSpan>
          <S.TopBarContainerLeftSpan>SEARCH</S.TopBarContainerLeftSpan>
        </S.TopBarContainerLeft>
        <S.TopBarContainerCenter>
          <S.TopBarContainerCenterSpan>GENERAL</S.TopBarContainerCenterSpan>
          <S.TopBarContainerCenterSpan>BROWNBAG</S.TopBarContainerCenterSpan>
          <S.TopBarContainerCenterSpan>RANDOM</S.TopBarContainerCenterSpan>
          <S.TopBarContainerCenterSpan>MUSIC</S.TopBarContainerCenterSpan>
          <S.TopBarContainerCenterSpan>
            ANNOUNCEMENTS
          </S.TopBarContainerCenterSpan>
        </S.TopBarContainerCenter>
        <S.TopBarContainerRight>
          <S.TopBarContainerRightSpan>LOG IN</S.TopBarContainerRightSpan>
        </S.TopBarContainerRight>
      </S.TopBarContainer>
    </S.TopBar>
  );
};

export default TopBar;
