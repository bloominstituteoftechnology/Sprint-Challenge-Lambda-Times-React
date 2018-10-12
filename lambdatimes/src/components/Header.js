import React from 'react';
import {Header, Date} from './Styles';
 
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <Header>
      <Span type='date'>SMARCH 32, 2018</Span>
      <h1>Lambda Times</h1>
      <Span type='temp'>98°</Span>
    </Header>
  )
}

export default Header