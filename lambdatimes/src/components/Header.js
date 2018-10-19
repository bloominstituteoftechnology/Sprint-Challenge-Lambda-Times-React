import React from 'react';
import { HeaderStyle, TheDate, TheTemp } from './Content/Styles';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

function Header() {
  return (
    <HeaderStyle>
      <TheDate>OCTOBER 19, 2018</TheDate>
      <h1>Lambda Times</h1>
      <TheTemp>53°</TheTemp>
    </HeaderStyle>
  )
}

export default Header