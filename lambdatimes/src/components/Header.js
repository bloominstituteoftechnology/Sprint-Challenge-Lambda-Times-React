import React from 'react';
import { HeaderDiv, Date, Temp } from '../CSS/styled';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderDiv>
      <Date>SMARCH 32, 2018</Date>
      <h1>Lambda Times</h1>
      <Temp>98°</Temp>
    </HeaderDiv>
  )
}

export default Header