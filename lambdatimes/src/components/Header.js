import React from 'react';
import {StyledHeader, Span, StyledH1} from './Styles';
 
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <StyledHeader>
      <Span type='date'>SMARCH 32, 2018</Span>
      <StyledH1>Lambda Times</StyledH1>
      <Span type='temp'>98°</Span>
    </StyledHeader>
  )
}

export default Header