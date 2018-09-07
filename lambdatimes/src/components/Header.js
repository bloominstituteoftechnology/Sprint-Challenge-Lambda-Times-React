import React from 'react';
import{ HeaderWrapper,HeaderText} from './Styles/HeaderStyles'
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderWrapper>
      <span className="date">SMARCH 32, 2018</span>
      <HeaderText>Lambda Times</HeaderText>
      <span className="temp">98°</span>
    </HeaderWrapper>
  )
}

export default Header