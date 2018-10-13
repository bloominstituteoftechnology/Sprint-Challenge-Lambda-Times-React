import React from 'react';
import {HeaderContainer, HeaderDate, HeaderTemp} from './Content/Header-styled.js'
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderDate>SMARCH 32, 2018</HeaderDate>
      <h1>Lambda Times</h1>
      <HeaderTemp className="temp">98°</HeaderTemp>
    </HeaderContainer>
  )
}
export default Header