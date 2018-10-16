import React from "react";
import styled from "styled-components";

const TopBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;
const Container = styled.div`
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
const LeftContainer = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;
const LeftNavItem = styled.span`
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
const CenterNavItem = styled.span`
  cursor: pointer;
  margin-right: 5%;
  &:hover {
    text-decoration: underline;
  }
`;
const LastCenterNav = styled.span`
  margin-right: 0;
  cursor: pointer;
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
const RightNavItem = styled.span`
  cursor: pointer;
`;
const TopBar = () => {
  return (
    <TopBarContainer>
      <Container>
        <LeftContainer>
          <LeftNavItem>TOPICS</LeftNavItem>
          <LeftNavItem>SEARCH</LeftNavItem>
        </LeftContainer>
        <CenterContainer>
          <CenterNavItem>GENERAL</CenterNavItem>
          <CenterNavItem>BROWNBAG</CenterNavItem>
          <CenterNavItem>RANDOM</CenterNavItem>
          <CenterNavItem>MUSIC</CenterNavItem>
          <LastCenterNav>ANNOUNCEMENTS</LastCenterNav>
        </CenterContainer>
        <RightContainer>
          <RightNavItem>LOG IN</RightNavItem>
        </RightContainer>
      </Container>
    </TopBarContainer>
  );
};

export default TopBar;
