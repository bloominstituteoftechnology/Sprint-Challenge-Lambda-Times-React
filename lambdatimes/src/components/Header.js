import React from 'react';
import { StyledHeader } from "../Styles";

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <StyledHeader>
      <span className="date">SMARCH 32, 2018</span>
      <h1>Lambda Times</h1>
      <span className="temp">98°</span>
    </StyledHeader>
  )
}

export default Header