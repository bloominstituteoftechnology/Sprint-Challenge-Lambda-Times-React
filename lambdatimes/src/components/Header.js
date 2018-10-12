import React from 'react';
import styled from 'styled-components'
const HeaderWrap = styled.div `
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
`;

const HeadlineWrap = styled.h1 `
font-size: 60px;
font-family: Didot, serif;
font-weight: bold;
flex: 8;
text-align: center;
color: #000;
`;

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderWrap>
      <span className="date">SMARCH 32, 2018</span>
      <HeadlineWrap>Lambda Times</HeadlineWrap>
      <span className="temp">98°</span>
    </HeaderWrap>
  )
}

export default Header