import React from 'react';
import Date from './Header/Date';
import Title from './Header/Title';
import Temp from './Header/Temp';
import HeaderContainer from './Header/HeaderContainer';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderContainer>
      <Date>SMARCH 32, 2018</Date>
      <Title>Lambda Times</Title>
      <Temp>98°</Temp>
    </HeaderContainer>
  )
}

export default Header