import React from 'react';
import { HeaderWrap, HeaderH1, HeadSpan } from './StyleComponents.js';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderWrap>
      <HeadSpan date >SMARCH 32, 2018</HeadSpan>
      <HeaderH1>Lambda Times</HeaderH1>
      <HeadSpan temp >98°</HeadSpan>
    </HeaderWrap>
  )
}

export default Header