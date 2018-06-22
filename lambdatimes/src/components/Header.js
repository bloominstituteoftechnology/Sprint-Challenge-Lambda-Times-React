import React from 'react';

import {TheHeader,
  HeaderH1,
  Date,
  Temp
} from './Reusables/Reusables'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <TheHeader>
      <Date>SMARCH 32, 2018</Date>
      <HeaderH1>Lambda Times</HeaderH1>
      <Temp>98°</Temp>
    </TheHeader>
  )
}

export default Header