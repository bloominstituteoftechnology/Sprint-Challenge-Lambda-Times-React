import React from "react";
import { StyledHeader, StyledSpan } from "./Content/Styles";
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <StyledHeader>
      <StyledSpan date>SMARCH 32, 2018</StyledSpan>
      <h1>Lambda Times</h1>
      <StyledSpan temp>98°</StyledSpan>
    </StyledHeader>
  );
};

export default Header;
