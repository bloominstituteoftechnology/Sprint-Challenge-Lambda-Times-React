import React from 'react';
import styled from 'styled-components'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
`
const Header = () => {
  return (
    <HeaderContainer >
      <span className="date">SMARCH 32, 2018</span>
      <h1>Lambda Times</h1>
      <span className="temp">98°</span>
    </HeaderContainer>
  )
}

export default Header