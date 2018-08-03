import React from 'react';
import styled from 'styled-components';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const MyHeader = styled.div `
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

`;
const Dater = styled.span `
margin-left: 25px;
flex: 1;

`
const Temper = styled.span `
text-align: right;
margin-right: 25px;
flex: 1;
`


const Header = () => {
  return (
    <MyHeader>
      <Dater>SMARCH 32, 2018</Dater>
      <h1>Lambda Times</h1>
      <Temper>98°</Temper>
    </MyHeader>
  )
}

export default Header