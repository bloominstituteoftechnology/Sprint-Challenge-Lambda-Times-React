import React from 'react';
import { StyledHeader, HeaderTitle, HeaderSpan } from '../Styles/HeaderStyles';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <StyledHeader>
      <HeaderSpan date flex>
        SMARCH 32, 2018
      </HeaderSpan>
      <HeaderTitle>Lambda Times</HeaderTitle>
      <HeaderSpan temp flex>
        98°
      </HeaderSpan>
    </StyledHeader>
  );
};

export default Header;

// <div className="header">
//   <span className="date">SMARCH 32, 2018</span>
//   <h1>Lambda Times</h1>
//   <span className="temp">98°</span>
// </div>
