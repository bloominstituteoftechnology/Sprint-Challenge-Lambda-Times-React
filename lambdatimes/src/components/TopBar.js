import React from "react";
import styled from "styled-components";
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file
const Wrapper = styled.div`
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
const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;
const ContainerLeftInline = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;
const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;
const ContainerCenterInline = styled.span`
  cursor: pointer;
  margin-right: 5%;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    text-decoration: underline;
  }
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
const ContainerRightInline = styled.span`
  cursor: pointer;
`;
const TopBar = () => {
  return (
    <Wrapper>
      <Container>
        <ContainerLeft>
          <ContainerLeftInline>TOPICS</ContainerLeftInline>
          <ContainerLeftInline>SEARCH</ContainerLeftInline>
        </ContainerLeft>
        <ContainerCenter>
          <ContainerCenterInline>GENERAL</ContainerCenterInline>
          <ContainerCenterInline>BROWNBAG</ContainerCenterInline>
          <ContainerCenterInline>RANDOM</ContainerCenterInline>
          <ContainerCenterInline>MUSIC</ContainerCenterInline>
          <ContainerCenterInline>ANNOUNCEMENTS</ContainerCenterInline>
        </ContainerCenter>
        <ContainerRight>
          <ContainerRightInline>LOG IN</ContainerRightInline>
        </ContainerRight>
      </Container>
    </Wrapper>
  );
};

export default TopBar;
