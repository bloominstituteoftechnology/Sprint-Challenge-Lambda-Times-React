import React from 'react';


import { HeaderWrapper, HeaderH, HeaderSpan, HeaderDate, HeaderTemp } from '../HeaderStyled'


// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderSpan><HeaderDate> MARCH 32, 2018</HeaderDate></HeaderSpan>
      <HeaderH>Lambda Times</HeaderH>
      <HeaderSpan><HeaderTemp>98°</HeaderTemp></HeaderSpan>
    </HeaderWrapper>
  )
}

export default Header