import React from 'react';
import {HeaderDiv, DateSpan, HeaderTitle, TempSpan} from '../Styles'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderDiv>
      <DateSpan>MARCH 32, 2018</DateSpan>
      <HeaderTitle>Lambda Times</HeaderTitle>
      <TempSpan>98°</TempSpan>
    </HeaderDiv>
  )
}

export default Header