import React from 'react';
import { TopHeader, HeaderSpanDate, HeaderH1, HeaderSpanTemp } from '../Styles';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <TopHeader>
      <HeaderSpanDate>MARCH 32, 2018</HeaderSpanDate>
      <HeaderH1>Lambda Times</HeaderH1>
      <HeaderSpanTemp className="temp">98°</HeaderSpanTemp>
    </TopHeader>
  )
}

export default Header