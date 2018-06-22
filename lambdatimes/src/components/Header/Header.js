import React from 'react'
import { HeaderContainer, Date, Title, Weather } from './HeaderStyleComponents '

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderContainer>
      <Date>SMARCH 32, 2018</Date>
      <Title>Lambda Times</Title>
      <Weather>98°</Weather>
    </HeaderContainer>
  )
}

export default Header
