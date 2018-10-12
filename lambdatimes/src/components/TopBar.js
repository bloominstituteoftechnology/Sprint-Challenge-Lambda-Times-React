import React from 'react';
import styled from 'styled-components';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Topbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`
const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`
const Span = styled.span`
  margin-right: 25%;
  font-weight: bold;
  cursor: pointer;
`
const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`
const SpanMain = styled.span`
   cursor: pointer;
    margin-right: 5%;

    &:hover {
      text-decoration: underline;
    }
`
const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`

const Login = styled.span`
    cursor: pointer;
`

const TopBar = () => {
  return (
    <Topbar className="top-bar">
      <Container className="container">
        <ContainerLeft className="container-left">
          <Span>TOPICS</Span><Span>SEARCH</Span>
        </ContainerLeft >
        <ContainerCenter className="container-center">
          <SpanMain>GENERAL</SpanMain><SpanMain>BROWNBAG</SpanMain><SpanMain>RANDOM</SpanMain><SpanMain>MUSIC</SpanMain><SpanMain>ANNOUNCEMENTS</SpanMain>
        </ContainerCenter>
        <ContainerRight className="container-right">
          <Login>LOG IN</Login>
        </ContainerRight>
      </Container>
    </Topbar>
  )
}

export default TopBar;