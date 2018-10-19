import React from 'react';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderStyle>
      <Date>OCTOBER 19, 2018</Date>
      <h1>Lambda Times</h1>
      <Temp>53°</Temp>
    </HeaderStyle>
  )
}

export default Header