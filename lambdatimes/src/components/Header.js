import React from 'react';
import { HeaderH1, HeaderDiv, HeaderSpans } from '../CSS/css.styles';


// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderSpans className="date">SMARCH 32, 2018</HeaderSpans>
      <HeaderH1>Lambda Times</HeaderH1>
      <HeaderSpans className="temp">98°</HeaderSpans>
    </HeaderDiv>
  )
}

export default Header