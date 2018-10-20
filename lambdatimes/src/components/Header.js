import React from "react";
import { HeaderDiv, Date, Temp } from "./styles";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderDiv>
      <Date>OCTOBER 10, 2018</Date>
      <h1>Lambda Times</h1>
      <Temp>98°</Temp>
    </HeaderDiv>
  );
};

export default Header;
