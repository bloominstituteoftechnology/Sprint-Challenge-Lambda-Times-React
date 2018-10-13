import React from 'react';
import {StyledHeader, HeaderDate, HeaderTemp, HeaderTitle} from './StyledComponents/HeaderStyles';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <StyledHeader>
      <HeaderDate>SMARCH 32, 2018</HeaderDate>
      <HeaderTitle>Lambda Times</HeaderTitle>
      <HeaderTemp>98°</HeaderTemp>
    </StyledHeader>
  )
}

export default Header