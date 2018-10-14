import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const HeaderCont = styled.div`
  width: 100%;
  height: 125px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  margin-top: 46px;
  padding-bottom: 17px;
  
  span {
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
  }
  .date {
    margin-left: 26px;
    flex: 1;
  }
  .temperature {
    text-align: right;
    margin-right: 24px;
    flex: 1;
  }
`

const Title = styled.h1`
  font-size: 67px;
  font-family: Didot, serif;
`

const Header = () => {
  return (
    <HeaderCont>
      <span className="date">OCTOBER 12, 2018</span>
      <Title>Lambda Times</Title>
      <span className="temperature">98°</span>
    </HeaderCont>
  )
}

export default Header;