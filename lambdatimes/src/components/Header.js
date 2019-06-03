import React from 'react';
import styled from 'styled-components'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const HeaderStyle = styled.div `
      display: inline-flex
      flex-direction: row;
      width: 100%;
       justify-content: center`

 const SpanStyle = styled.span `
    font-size: 25px;
    margin:40px;`     

const Hstyle = styled.h1 `
font-size: 45px
margin: 20px`
const Header = () => {
  return (
      <HeaderStyle>
 
        <SpanStyle>SMARCH 32, 2018</SpanStyle>
      <Hstyle>Lambda Times</Hstyle>
      <SpanStyle>98°</SpanStyle>
           </HeaderStyle>

  )
}

export default Header