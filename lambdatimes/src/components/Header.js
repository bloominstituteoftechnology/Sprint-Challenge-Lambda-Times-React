import React from "react";
import { HeaderStyle, Date, Temp } from "./HeaderStyles";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderStyle>
      <Date>SMARCH 32, 2018</Date>
      <h1>Lambda Times</h1>
      <Temp className="temp">98°</Temp>
    </HeaderStyle>
  );
};

export default Header;
