import React from 'react';
import {HeaderContainer,HeaderH1,SpanTime,SpanDate} from './ReusableStyles';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderContainer>
      <SpanDate>SMARCH 32, 2018</SpanDate>
      <HeaderH1>Lambda Times</HeaderH1>
      <SpanTime>98°</SpanTime>
    </HeaderContainer>
  )
}

export default Header
