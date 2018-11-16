import React from 'react';
import { HeaderContainer, HeaderHeading, HeaderDate, HeaderTemp } from '../StyledComponents/Header-st';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderDate>SMARCH 32, 2018</HeaderDate>
      <HeaderHeading>Lambda Times</HeaderHeading>
      <HeaderTemp>98°</HeaderTemp>
    </HeaderContainer>
  )
}

export default Header