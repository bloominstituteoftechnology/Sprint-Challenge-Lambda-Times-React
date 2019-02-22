import React from 'react';
import {HeaderStyle, HeaderH1, Date, Temp} from './styledComponents.js';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderStyle>
      <Date>SMarch 32, 2018</Date>
      <HeaderH1>LambdaTimes</HeaderH1>
      <Temp>98°</Temp>
    </HeaderStyle>
  );
};

export default Header;
