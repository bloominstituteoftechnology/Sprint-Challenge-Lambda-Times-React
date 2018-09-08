import React from "react";
import styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

function handleLogout() {
  localStorage.clear();
  window.location.reload();
}

const username = JSON.parse(localStorage.getItem('username')) || {};
function loggedIn() {
  if('username' in username) {
    if(username.username) {
      return <RightSpan onClick={handleLogout}>LOGOUT</RightSpan>;
    }
  } else {
    return <RightSpan>LOGIN</RightSpan>;
  }
}
const TopBar = () => {
  return (
    <TopBarContainer>
      <Container>
        <ContainerLeft>
          <LeftSpan>TOPICS</LeftSpan>
          <LeftSpan>SEARCH</LeftSpan>
        </ContainerLeft>
        <CenterContainer>
          <CenterSpan>GENERAL</CenterSpan>
          <CenterSpan>BROWNBAG</CenterSpan>
          <CenterSpan>RANDOM</CenterSpan>
          <CenterSpan>MUSIC</CenterSpan>
          <CenterSpan>ANNOUNCEMENTS</CenterSpan>
        </CenterContainer>
        <ContainerRight>
        {loggedIn()}
        </ContainerRight>  
      </Container>
    </TopBarContainer>
  );
};

const RightSpan = styled.span`
  cursor: pointer;
`;

const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold; 
`;

const CenterSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const LeftSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
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
`;

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

export default TopBar;
