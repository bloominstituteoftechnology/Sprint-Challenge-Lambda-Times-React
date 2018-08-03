import React from 'react';
import {HeaderComp, HeaderH1, HeaderDate, HeaderTemp} from "./Styling";

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderComp>
      <HeaderDate>SMARCH 32, 2018</HeaderDate>
      <HeaderH1>Lambda Times</HeaderH1>
      <HeaderTemp>98°</HeaderTemp>
    </HeaderComp>
  )
}

export default Header