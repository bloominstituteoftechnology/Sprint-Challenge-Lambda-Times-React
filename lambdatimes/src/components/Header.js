import React from 'react';
import {HeaderStyle, HeaderDate, HeaderH1, HeaderTemp} from './StyledComponents';

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderDate>MARCH 32, 2018</HeaderDate>
      <HeaderH1>Lambda Times</HeaderH1>
      <HeaderTemp>98°</HeaderTemp>
    </HeaderStyle>
  )
}

export default Header