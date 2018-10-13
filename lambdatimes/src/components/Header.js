import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const HeadContainer = styled.div`
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
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
`
const HeadH1 = styled.div`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`
const HeadSpan = styled.div`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`
const DateSpan = HeadSpan.extend`
  margin-left: 25px;
  flex: 1;
`
const TemperatureSpan = HeadSpan.extend`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`

const Header = () => {
  return (
    <HeadContainer>
      <DateSpan>SMARCH 32, 2018</DateSpan>
      <HeadH1>Lambda Times</HeadH1>
      <TemperatureSpan>98°</TemperatureSpan>
    </HeadContainer>
  )
}

export default Header;