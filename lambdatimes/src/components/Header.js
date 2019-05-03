import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const HeaderContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
width:100%;
height:120px;
margin-top:44px;
padding-bottom:15px;
align-items:center;
background-color:#fff;
border-bottom:1px solid lightgrey;

`;

const Date = styled.span`
align-self:flex-end;
font-size:15px;
letter-spacing:1px;
margin-left:25px;
font-family:helvatica;
font-weight:bold;
color:grey;


`;

const H1 = styled.h1`
font-size=60px;
text-align:center;
color:#000;

`;

const Temp = styled.span`
text-align:right;
margin-right:25px;
font-family:helvatica;
font-weight:bold;
color:grey;
margin-top:60px;
font-size:20px;

`;

const Header = () => {
  return (
    // <HeaderContainer className="header">
    <HeaderContainer>
      <Date>MARCH 32, 2018</Date>
      <H1>Lambda Times</H1>
      <Temp>98°</Temp>
    </HeaderContainer>
  )
}

export default Header