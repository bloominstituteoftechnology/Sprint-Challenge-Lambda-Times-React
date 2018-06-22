import React from 'react';
// import styled from "styled-components";
import {
  HeaderMain,
  Headerh1,
  HeaderSpanDate,
  HeaderSpanTemp
} from "./Reusable/Reusables";
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderMain>
      <HeaderSpanDate>MARCH 32, 2018</HeaderSpanDate>
      <Headerh1>Lambda Times</Headerh1>
      <HeaderSpanTemp>98°</HeaderSpanTemp>
    </HeaderMain>
  )
}

export default Header