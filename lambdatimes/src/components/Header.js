import React from 'react';
import { HeaderWrapper, HeaderDate, HeaderTemp } from '../styles/HeaderStyles';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderDate>SMARCH 32, 2018</HeaderDate>
      <h1>Lambda Times</h1>
      <HeaderTemp>98°</HeaderTemp>
    </HeaderWrapper>
  )
}

export default Header