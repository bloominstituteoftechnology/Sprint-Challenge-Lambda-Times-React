import React from "react";
import Styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBarStyle = Styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: row;
position: fixed;
align-items: none;
height: 44px;
background-color: #333;
`;

const Container = Styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  letter-spacing: 1px;
  color: #fff;
  padding: 0 10px;
`;

const ContLeft = Styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  span {
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
  }
`;

const ContCenter = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
  span {
    cursor: pointer;
    margin-right: 5%;
  }
  span:last-child{
    margin-right: 0;
  }
  span:hover {
    text-decoration: underline;
  }
`;

const ContRight = Styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
font-weight: bold;
span {
  cursor: pointer;
}
`;

const TopBar = () => {
  return (
    <TopBarStyle>
      <Container>
        <ContLeft>
          <span>TOPICS</span>
          <span>SEARCH</span>
        </ContLeft>
        <ContCenter>
          <span>GENERAL</span>
          <span>BROWNBAG</span>
          <span>RANDOM</span>
          <span>MUSIC</span>
          <span>ANNOUNCEMENTS</span>
        </ContCenter>
        <ContRight>
          <span>LOG IN</span>
        </ContRight>
      </Container>
    </TopBarStyle>
  );
};

export default TopBar;
