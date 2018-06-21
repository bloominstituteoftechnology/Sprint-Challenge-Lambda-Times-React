import React from 'react';
import styled from 'styled-components';
const StyledTopbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  height: 44px;
  background-color: #333;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  color: white;
  letter-spacing: 1px;
  padding: 0 10px;
  @media(min-width: 1280px){
    width: 1280px;
  }
`
const ContainerLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  font-size: 11px;
  span {
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
  }
`
const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
  span {
    cursor: pointer;
  }
`
const ContainerCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 3;
  font-size: 9px;
  span {
    cursor: pointer;
    margin-right: 5%;
    &:last-child{
      margin-right: 0;
    }
    &:hover {
      text-decoration: underline;
    }
  }
`


const TopBar = () => {
  return (
    <StyledTopbar>
      <Container>
        <ContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </ContainerLeft>
        <ContainerCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </ContainerCenter>
        <ContainerRight>
          <span>LOG IN</span>
        </ContainerRight>
      </Container>
    </StyledTopbar>
  )
}

export default TopBar