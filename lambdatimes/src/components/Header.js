import React from 'react';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
import { HeaderContainer, Date, Temp } from './HeaderStyles';

const Header = () => {
  return (
    <HeaderContainer >
      <Date>MARCH 32, 2018</Date>
      <h1>Lambda Times</h1>
      <Temp>98°</Temp>
    </HeaderContainer>
  )
}

export default Header