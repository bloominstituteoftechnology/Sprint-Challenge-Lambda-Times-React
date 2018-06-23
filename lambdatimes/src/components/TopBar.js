import React from "react";
import styled from "styled-components";
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file
const MainTopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const TopBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
    & {
      width: 1280px;
    }
  }
`;
const LeftContainer = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const LeftLink = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const CenterLink = styled.div`
  cursor: pointer;
  margin-right: 5%;

  &:last-child {
    margin-right: 0;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const RightLink = styled.span`
  cursor: pointer;
`;
const TopBar = () => {
  return (
    <MainTopBar>
      <TopBarContainer>
        <LeftContainer>
          <LeftLink>TOPICS</LeftLink>
          <LeftLink>SEARCH</LeftLink>
        </LeftContainer>
        <CenterContainer>
          <CenterLink>GENERAL</CenterLink>
          <CenterLink>BROWNBAG</CenterLink>
          <CenterLink>RANDOM</CenterLink>
          <CenterLink>MUSIC</CenterLink>
          <CenterLink>ANNOUNCEMENTS</CenterLink>
        </CenterContainer>
        <RightContainer>
          <RightLink>LOG IN</RightLink>
        </RightContainer>
      </TopBarContainer>
    </MainTopBar>
  );
};

export default TopBar;
