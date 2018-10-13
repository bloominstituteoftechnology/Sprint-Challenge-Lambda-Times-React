import React from 'react';
import moment from 'moment'
import { HeaderContainer, HeaderSpan } from "./Styles/StyledComponets";
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
let now = moment().format('MMM Do YYYY') 
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderSpan className="date">{now}</HeaderSpan>
      <h1>Lambda Times</h1>
      <HeaderSpan className="temp">98°</HeaderSpan>
    </HeaderContainer>
  )
}

export default Header