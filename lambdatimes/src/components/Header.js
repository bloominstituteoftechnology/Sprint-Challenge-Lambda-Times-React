import React from 'react';
import StyledHeader from "./StyledHeader"
import SpanDate from "./SpanDate"
import SpanTemp from "./SpanTemp"

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <StyledHeader>
        <SpanDate>SMARCH 32, 2018</SpanDate>
         <h1>Lambda Times</h1>
        <SpanTemp>98°</SpanTemp>
    </StyledHeader>
  )
}

export default Header