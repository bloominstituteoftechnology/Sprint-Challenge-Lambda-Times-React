import React from "react";
import { AppHeader, HeaderH1, Date, Temp } from "./Content/Styled";

const Header = () => {
  return (
    <AppHeader>
      <Date>SMARCH 32, 2018</Date>
      <HeaderH1>Lambda Times</HeaderH1>
      <Temp>98°</Temp>
    </AppHeader>
  );
};

export default Header;
