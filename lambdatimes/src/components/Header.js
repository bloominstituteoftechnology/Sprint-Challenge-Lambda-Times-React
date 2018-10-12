import React from "react";
import * as S from "../CSS/styles";
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <S.Header>
      <S.HeaderSpanDate>SMARCH 32, 2018</S.HeaderSpanDate>
      <S.HeaderH1>Lambda Times</S.HeaderH1>
      <S.HeaderSpanTemp>98°</S.HeaderSpanTemp>
    </S.Header>
  );
};

export default Header;
