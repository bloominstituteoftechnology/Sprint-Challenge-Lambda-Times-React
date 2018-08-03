import React from 'react';
import styled from 'styled-components';

const Head = styled.header `
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
`

const HeaderDate = styled.span `
align-self: flex-end;
font-size: 11px;
font-weight: bold;
letter-spacing: 1px;

margin-left: 25px;
flex: 1;
`

const HeaderTemp = styled.span `
align-self: flex-end;
font-size: 11px;
font-weight: bold;
letter-spacing: 1px;

text-align: right;
margin-right: 25px;
flex: 1;
`

const Headerh1 = styled.h1 `
font-size: 60px;
font-family: Didot, serif;
font-weight: bold;
flex: 8;
text-align: center;
color: #000;
`

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <Head>
      <HeaderDate>MARCH 32, 2018</HeaderDate>
      <Headerh1>Lambda Times</Headerh1>
      <HeaderTemp>98°</HeaderTemp>
    </Head>
  )
}

export default Header