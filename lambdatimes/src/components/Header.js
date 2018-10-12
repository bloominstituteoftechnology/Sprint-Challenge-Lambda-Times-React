import React from 'react';
import {StyledHeader, StyledDate, StyledTemp} from '../../src/styles';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <StyledHeader>
      <StyledDate>SMARCH 32, 2018</StyledDate>
      <h1>Lambda Times</h1>
      <StyledTemp>98°</StyledTemp>
    </StyledHeader>
  )
}

export default Header