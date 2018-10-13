import React from 'react';
import styled from 'styled-components';


const HeaderCont = styled.div `
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
}
@media (min-width: 1280px) {
  .header {
    width: 1280px;
  } 
`
const PageHeader = styled.h1 `
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    color: #000;
    text-align: center; 
`
const Date = styled.span `
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: 25px;
  flex: 1;
`
const Temperature = styled.span `
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  flex: 1;
  text-align: right;
  margin-right: 25px; 
`

const Header = () => {
  return (
    <HeaderCont>
      <Date>SMARCH 32, 2018</Date>
      <PageHeader>Lambda Times</PageHeader>
      <Temperature>98°</Temperature>
    </HeaderCont>
  )
}

export default Header