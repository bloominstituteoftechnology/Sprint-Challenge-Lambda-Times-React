import React from 'react';
import {HeaderBox, Date, Temp} from '../CSS/ReusableStyles';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderBox>
      <span className="date"><Date>SMARCH 32, 2018</Date></span>
      <h1>Lambda Times</h1>
      <span className="temp"><Temp>98°</Temp></span>
    </HeaderBox>
  )
}

export default Header