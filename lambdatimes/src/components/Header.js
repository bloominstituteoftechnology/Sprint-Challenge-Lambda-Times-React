import React from 'react';
import { StyledHeader, HeaderH1, HeaderSpan } from './HeaderStyles';
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <StyledHeader>
      <HeaderSpan type="date">SMARCH 32, 2018</HeaderSpan>
      <HeaderH1>Lambda Times</HeaderH1>
      <HeaderSpan type="temp">98°</HeaderSpan>
    </StyledHeader>
  );
};

export default Header;
