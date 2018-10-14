import React from 'react';
import { StyledHeader, StyledDateSpan, StyledH1, StyledTempSpan } from './Content/Styles';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <StyledHeader>
      <StyledDateSpan>SMARCH 32, 2018</StyledDateSpan>
      <StyledH1>Lambda Times</StyledH1>
      <StyledTempSpan>98°</StyledTempSpan>
    </StyledHeader>
  )
}

export default Header