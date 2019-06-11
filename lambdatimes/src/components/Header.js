import React from 'react';
import styled, { css } from 'styled-components';
import {H1Style} from "./HeaderStyling";
import {HeaderSpan} from "./HeaderStyling";
import {HeaderEnd} from "./HeaderStyling";

const Header = () => {
  return (
    <HeaderEnd>
      <HeaderSpan type="date">SMARCH 32, 2018</HeaderSpan>
      <H1Style>Lambda Times</H1Style>
      <HeaderSpan type="temp">98°</HeaderSpan>
    </HeaderEnd>
  )
}

export default Header