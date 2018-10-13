import React from 'react';
import styled from 'styled-components';

const HeaderClass = styled.div`
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
  @media (min-width: 1100px) {
    width: 1180px;
  }
`
const HeaderH1 = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`

const HeaderSpan = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`
const DateHeaderSpan = HeaderSpan.extend`
  margin-left: 25px;
  flex: 1;
`

const TempHeaderSpan = HeaderSpan.extend`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`

const Header = () => {
    return (
        <HeaderClass>
            <DateHeaderSpan>OCTOBER 13, 2018</DateHeaderSpan>
            <HeaderH1>Lambda Times</HeaderH1>
            <TempHeaderSpan>55°</TempHeaderSpan>
        </HeaderClass>
    )
}

export default Header