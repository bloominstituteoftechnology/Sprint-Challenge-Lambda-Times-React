import React from 'react';
import styled from 'styled-components';

const CTAHead = styled.div `
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

  @media (min-width: 1280px) {
    width: 1280px;
  }
`
const Title = styled.h1 `
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`
const CTASpan = styled(CTAHead) `
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`
const CTADate = styled(CTASpan) `
  margin-left: 25px;
  flex: 1;
`
const CTATemp = styled(CTASpan) `
  text-align: right;
  margin-right: 25px;
  flex: 1;  
`

const Header = () => {
  return (
    <CTAHead>
      <CTADate>SMARCH 32, 2018</CTADate>
      <Title>Lambda Times</Title>
      <CTATemp>98°</CTATemp>
    </CTAHead>
  )
}

export default Header