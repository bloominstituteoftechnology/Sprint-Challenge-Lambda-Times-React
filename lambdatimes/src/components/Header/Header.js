import React from 'react';
import {HeaderSyled, HeaderDate, HeaderH1, HeaderTemp} from './HeaderParts'
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderSyled>
      <HeaderDate>SMARCH 32, 2018</HeaderDate>
      <HeaderH1>Lambda Times</HeaderH1>
      <HeaderTemp>98°</HeaderTemp>
    </HeaderSyled>
  )
}

export default Header