import React from 'react';
import {Headers, Date, Header1, Temp} from './Styles.js';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <Headers>
      <Date>SMARCH 32, 2018</Date>
      <Header1>Lambda Times</Header1>
      <Temp>98°</Temp>
    </Headers>
  )
}

export default Header