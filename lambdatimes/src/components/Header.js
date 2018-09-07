import React from 'react';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
import {
  HeaderDiv, 
  DateSpan, 
  TempSpan, 
} from './HeaderStyles';

const Header = () => {
  return (
    <HeaderDiv>
      <DateSpan>SMARCH 32, 2018</DateSpan>
      <h1>Lambda Times</h1>
      <TempSpan>98°</TempSpan>
    </HeaderDiv>
  )
}

export default Header;
