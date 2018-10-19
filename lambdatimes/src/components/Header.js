import React from 'react';
import { HeaderStyle, theDate } from './Content/Styles';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderStyle>
      <theDate>OCTOBER 19, 2018</theDate>
      <h1>Lambda Times</h1>
      <theTemp>53°</theTemp>
    </HeaderStyle>
  )
}

export default Header