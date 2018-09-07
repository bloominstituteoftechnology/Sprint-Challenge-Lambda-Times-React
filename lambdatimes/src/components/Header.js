import React from 'react';
import {HeaderWrap, HeaderText, HeaderName} from './styles';

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderText>SEPTEMBER 7, 2018</HeaderText>
      <HeaderName>Lambda Times</HeaderName>
      <HeaderText right>65°</HeaderText>
    </HeaderWrap>
  )
}

export default Header