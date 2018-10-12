import React from 'react';
import { HeaderContainer, DateText, TempText } from './styles'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderContainer>
      <DateText>SMARCH 32, 3018</DateText>
      <h1>Lambda Times</h1>
      <TempText>98°</TempText>
    </HeaderContainer>
  )
}

export default Header
