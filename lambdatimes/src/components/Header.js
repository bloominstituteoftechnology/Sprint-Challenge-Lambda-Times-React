import React from 'react';
import {HeaderWrap, HeaderText, HeaderName} from './styles';

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderText>SMARCH 32, 2018</HeaderText>
      <HeaderName>Lambda Times</HeaderName>
      <HeaderText right>98°</HeaderText>
    </HeaderWrap>
  )
}

export default Header