import React from 'react';
import {HeaderDiv, HeaderText, HeaderSpan} from "./Styles";

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderSpan date>SMARCH 32, 2018</HeaderSpan>
      <HeaderText>Lambda Times</HeaderText>
      <HeaderSpan temp>98°</HeaderSpan>
    </HeaderDiv>
  )
}

export default Header