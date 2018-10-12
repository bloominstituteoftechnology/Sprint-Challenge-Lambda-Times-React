import React from 'react';
import * as styles from './styleComponents.js';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <styles.Header>
      <styles.DateToday>SMARCH 32, 2018</styles.DateToday>
      <h1>Lambda Times</h1>
      <styles.Temp>98°</styles.Temp>
    </styles.Header>
  )
}

export default Header