import React from 'react';
import styled from 'styled-components';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const header = styled.div`
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
  @media (min-width: 1280px) {
      width: 1280px;
    }
  }
`
const dateClass = styled.span`
  margin-left: 25px;
  flex: 1;
`
const tempClass = styled.span`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`





const Header = () => {
  return (
    <header>
      <span><dateClass>SMARCH 32, 2018</dateClass></span>
      <h1>Lambda Times</h1>
      <span><tempClass>98°</tempClass></span>
    </header>
  )
}

export default Header