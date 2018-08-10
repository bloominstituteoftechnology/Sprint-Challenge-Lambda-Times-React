import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

let HeaderContainer = styled.span`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
background-color: #fff;
border-bottom: 1px solid lightgrey;
width: 100%;
height: 120px;
margin-top: 44px;
padding-bottom: 15px;
@media (min-width: 1280px) {
    width: 1280px;
}
`


let HeaderTitle = styled.div`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`

let HeaderSpan = styled.div `
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`

let HeaderDate = styled.div `
  margin-left: 25px;
  flex: 1;
`

let HeaderTemp = styled.div `
  text-align: right;
  margin-right: 25px;
  flex: 1;
`

const Header = () => {
  return (
    <HeaderContainer>
    <HeaderDate>SMARCH 32, 2018</HeaderDate>
    <HeaderTitle>Lambda Times</HeaderTitle>
    <HeaderTemp>98°</HeaderTemp>
  </HeaderContainer>
  )
}

export default Header