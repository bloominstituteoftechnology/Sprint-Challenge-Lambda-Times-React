import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`

const ContainerMain = styled.div`
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
const ContainerCenter = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex: 3;
font-size: 9px;
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

const Span1 = styled.span`
cursor: pointer;
margin-right: 25%;
font-weight: bold;
`
const Span2 = styled.span`
cursor: pointer;
margin-right: 5%;
`
const Span3 = styled.span`
cursor: pointer;
margin-right: 5%;
margin-right: 5%;
`
const Span4 = styled.span`
cursor: pointer;
`

const TopBar = () => {
  return (
    <TopBarDiv>
      <ContainerMain>
        <ContainerLeft>
          <Span1>TOPICS</Span1><Span1>SEARCH</Span1>
        </ContainerLeft>
        <ContainerCenter>
          <Span2>GENERAL</Span2><Span2>BROWNBAG</Span2><Span2>RANDOM</Span2><Span2>MUSIC</Span2><Span3>ANNOUNCEMENTS</Span3>
        </ContainerCenter>
        <ContainerRight>
          <Span4>LOG IN</Span4>
        </ContainerRight>
      </ContainerMain>
    </TopBarDiv>
  )
}

export default TopBar;