import React from 'react';
import { HeaderWrapper, DateWrapper, TempWrapper } from '../CSS/Styles';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderWrapper>
      <DateWrapper>SMARCH 32, 2018</DateWrapper>
      <h1>Lambda Times</h1>
      <TempWrapper>98°</TempWrapper>
    </HeaderWrapper>
  )
}

export default Header