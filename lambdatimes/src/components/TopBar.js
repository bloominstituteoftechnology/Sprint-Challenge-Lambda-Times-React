
import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
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
    @media (min-width: 1280px) {
      .top-bar .container {
        width: 1280px;
      }
    }
`
const LeftSpan = styled.span `
cursor: pointer;
margin-right: 25%;
font-weight: bold;
`
const ContainerCenter = styled.div `
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex: 3;
font-size: 9px;
`
const CenterSpan = styled.span `
cursor: pointer;
margin-right: 5%;
`
const ContianerRight = styled.div `
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: row;
flex: 1;
margin-right: 5px; 
font-weight: 600;
font-size: 10;
    
`
const RightSpan = styled.span `
cursor: pointer;
    
`


const TopBar = () => {
  return (
    <Bar>
    <Container>
      <ContainerLeft>
       <LeftSpan>TOPICS</LeftSpan><LeftSpan>SEARCH</LeftSpan>
      </ContainerLeft>
      <ContainerCenter>
        <CenterSpan>GENERAL</CenterSpan><CenterSpan>BROWNBAG</CenterSpan><CenterSpan>RANDOM</CenterSpan><CenterSpan>MUSIC</CenterSpan><CenterSpan>ANNOUNCEMENTS</CenterSpan>
      </ContainerCenter>
      <ContianerRight>
        <RightSpan>LOG IN</RightSpan>
      </ContianerRight>
    </Container>
  </Bar>
  )
}

export default TopBar;
