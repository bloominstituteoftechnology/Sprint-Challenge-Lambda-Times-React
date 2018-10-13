import React from 'react';
import {
  HeaderStyle,
  DateStyle,
  Temp
} from './Styles/Header';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderStyle>
      <DateStyle>SMARCH 32, 2018</DateStyle>
      <h1>Lambda Times</h1>
      <Temp>98°</Temp>
    </HeaderStyle>
  )
}

export default Header