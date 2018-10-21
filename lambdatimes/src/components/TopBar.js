import React from 'react';
import styled from 'styled-components';


// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBarDiv=styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;
`

const ContainerDiv=styled.div`
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
`

const ContainerDivLeft=styled.div`
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;

`

const ContainerDivCenter=styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex: 3;
font-size: 9px;
`

const ContainerDivRight=styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`

const StyledSpanLeft=styled.span`
cursor: pointer;
margin-right: 25%;
font-weight: bold;
`
const StyledSpanCenter=styled.span`
cursor: pointer;
margin-right: 5%;
&:hover{
  text-decoration: underline;

}
`

const CenterLastChild=styled.span`
cursor: pointer;
margin-right: 0;
&:hover{
  text-decoration: underline;

}`

const StyledSpanRight=styled.span`
cursor: pointer;
`

const TopBar = () => {
  return (
    <TopBarDiv>
      <ContainerDiv>
        <ContainerDivLeft>
          <StyledSpanLeft>TOPICS</StyledSpanLeft><StyledSpanLeft>SEARCH</StyledSpanLeft>
        </ContainerDivLeft>
        <ContainerDivCenter>
          <StyledSpanCenter>GENERAL</StyledSpanCenter><StyledSpanCenter>BROWNBAG</StyledSpanCenter><StyledSpanCenter>RANDOM</StyledSpanCenter><StyledSpanCenter>MUSIC</StyledSpanCenter><CenterLastChild>ANNOUNCEMENTS</CenterLastChild>
        </ContainerDivCenter>
        <ContainerDivRight>
          <StyledSpanRight>LOG IN</StyledSpanRight>
        </ContainerDivRight>
      </ContainerDiv>
    </TopBarDiv>
  )
}

export default TopBar;