import React from "react";
import Styled from "styled-components";

const HeaderStyles = Styled.div`
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

  h1 {
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
  }
  span {
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
  }
`
const Date = Styled.span`
  margin-left: 25px;
  flex: 1;
`

const Temp = Styled.span`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`

const Header = () => {
  return (
    <HeaderStyles>
      <Date>SMARCH 32, 2018</Date>
      <h1>Lambda Times</h1>
      <Temp>98°</Temp>
    </HeaderStyles>
  );
};

export default Header;
