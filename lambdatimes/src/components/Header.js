import React from 'react';
import styled from "styled-components"

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const StyledHeaderWrapper = styled.div `
display: flex;
justify-content: space-between;
flex-direction: row;
align-items: center;
width: 100%;
background-color: #fff;
border-bottom: 1px solid lightgrey;
height: 120px;
margin-top: 44px;
padding-bottom: 15px;
}
@media (min-width: 1280px) {
.header {
  width: 1280px;
} 
`

const Date = styled.span `
align-self: flex-end;
font-size: 11px;
font-weight: bold;
letter-spacing: 1px;
margin-left: 25px;
flex: 1;
`

const Head = styled.h1 `
font-size: 60px;
font-family: Didot, serif;
font-weight: bold;
flex: 8;
text-align: center;
color: #000;
`


const Temperature = styled.span `
align-self: flex-end;
font-size: 11px;
font-weight: bold;
letter-spacing: 1px;
text-align: right;
margin-right: 25px;
flex: 1;
`

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <Date>SMARCH 32, 2018</Date>
      <Head>Lambda Times</Head>
      <Temperature>98°</Temperature>
    </StyledHeaderWrapper>
  )
}

export default Header