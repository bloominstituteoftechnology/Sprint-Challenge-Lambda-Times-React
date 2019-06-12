import React from 'react';
import styled, { css } from 'styled-components';
import {H1Style} from "./HeaderStyling";
//import {HeaderSpan} from "./HeaderStyling";
import {HeaderEnd} from "./HeaderStyling";

const HeaderSpan = styled.span`
 align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  ${props => (props.type === "date" ? `margin-left: 25px;
  flex: 1;` : null)}
  ${props => (props.type === "temp" ? `text-align: right;
  margin-right: 25px;
  flex: 1;` : null)}
  `;

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