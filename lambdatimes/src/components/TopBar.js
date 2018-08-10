import React from "react";
import styled from "styled-components";
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  const TopBar = styled.div`
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
      .top-bar .container {
        width: 1280px;
      }
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

  const ContainerLeftSpan = styled.div`
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

  const ContainerCenterSpan = styled.div`
    cursor: pointer;
    margin-right: 5%;
  `

  
  // .top-bar .container .container-center span:last-child {
  //   margin-right: 0;
  // }
  // .top-bar .container .container-center span:hover {
  //   text-decoration: underline;
  // }
  // .top-bar .container .container-right {
  //   display: flex;
  //   justify-content: flex-end;
  //   align-items: center;
  //   flex-direction: row;
  //   flex: 1;
  //   font-size: 11px;
  //   font-weight: bold;
  // }
  // .top-bar .container .container-right span {
  //   cursor: pointer;
  // }

  return (
    <TopBar>
      <Container>
        <ContainerLeft>
          <ContainerLeftSpan>
            <span>TOPICS</span>
            <span>SEARCH</span>
          </ContainerLeftSpan>
        </ContainerLeft>
        <ContainerCenter>
          <ContainerCenterSpan>
            <span>GENERAL</span>
            <span>BROWNBAG</span>
            <span>RANDOM</span>
            <span>MUSIC</span>
            <span>ANNOUNCEMENTS</span>
          </ContainerCenterSpan>
        </ContainerCenter>
        <div className="container-right">
          <span>LOG IN</span>
        </div>
      </Container>
    </TopBar>
  );
};

export default TopBar;
