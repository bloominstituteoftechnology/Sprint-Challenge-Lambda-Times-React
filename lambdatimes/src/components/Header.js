import React from 'react';
import{HeaderContainer, DateDiv, Title, TempDiv} from './ComponentStyles';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderContainer>
      <DateDiv>MARCH 32, 2018</DateDiv>
      <Title>Lambda Times</Title>
      <TempDiv className="temp">98°</TempDiv>
      </HeaderContainer>
  )
}

export default Header