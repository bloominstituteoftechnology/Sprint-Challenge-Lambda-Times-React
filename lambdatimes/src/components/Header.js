import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const HeaderDiv = styled.div`
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
`

const HeaderH1 = styled.div`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`

const HeaderSpan = styled.div`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`

const DateSpan = HeaderSpan.extend`
  margin-left: 25px;
  flex; 1;
`

const TempSpan = HeaderSpan.extend`
  text-align: rioght;
  margin-right: 25px
  flex: 1;
`

const Header = () => {
  return (
    <HeaderDiv>
      <DateSpan>JULY 7, 2018</DateSpan>
      <HeaderH1>Lambda Times</HeaderH1>
      <TempSpan>98°</TempSpan>
    </HeaderDiv>
  )
}

export default Header