import React from 'react';
import {HeaderStyle, HeaderDateStyle, HeaderH1Style, HeaderTempStyle} from './StyledComponents';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderDateStyle>MARCH 32, 2018</HeaderDateStyle>
      <HeaderH1Style>Lambda Times</HeaderH1Style>
      <HeaderTempStyle>98°</HeaderTempStyle>
    </HeaderStyle>
  )
}

export default Header