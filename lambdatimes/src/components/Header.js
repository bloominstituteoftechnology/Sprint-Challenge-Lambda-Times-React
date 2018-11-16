import React from "react";
import { HeaderDiv, HeaderSpan, HeaderHigh } from "../CSS/Styles";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderSpan date>SMARCH 32, 2018</HeaderSpan>
      <HeaderHigh>Lambda Times</HeaderHigh>
      <HeaderSpan temp>98°</HeaderSpan>
    </HeaderDiv>
  );
};

export default Header;
