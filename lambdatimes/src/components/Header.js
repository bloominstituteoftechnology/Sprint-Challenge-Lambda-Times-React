import React from 'react';
import {  StyledHeader, Date, Temp } from './Styles';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

    {/* <div className="header">
      <span className="date">SMARCH 32, 2018</span>
      <h1>Lambda Times</h1>
      <span className="temp">98°</span>
    </div> */}
const Header = () => {
  return (
    <StyledHeader>
      <Date>SMARCH 32, 2018</Date>
      <h1>Lambda Times</h1>
      <Temp>98°</Temp>
    </StyledHeader>
  )
}

export default Header