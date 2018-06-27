import React from "react";
import { HeaderStyle, HeaderTitle, DateSpan, TempSpan } from "./Styled/Styled";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderStyle>
      <DateSpan>SMARCH 32, 2018</DateSpan>
      <HeaderTitle>Lambda Times</HeaderTitle>
      <TempSpan>98°</TempSpan>
    </HeaderStyle>
  );
};

export default Header;
