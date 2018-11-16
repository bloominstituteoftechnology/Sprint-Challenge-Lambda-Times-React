import React from 'react';
import styled from 'styled-components';

const HContainer = styled.div`
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

const Title = styled.h1`
font-size: 60px;
font-family: Didot, serif;
font-weight: bold;
flex: 8;
text-align: center;
color: #000;
`

const HSpan = styled.span`
align-self: flex-end;
font-size: 11px;
font-weight: bold;
letter-spacing: 1px;
flex: 1;
  ${props => props.notClassName="date" ? `margin-left: 25px;` : null}
  ${props => props.notClassName="temp" ? `text-align: right; margin-right: 25px;` : null}
`

const Date = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  flex: 1;
  margin-left: 25px;
`

const Temp = styled.span`
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
    <HContainer>
      <Date>May 13, 2010</Date>
      <Title>Lambda Times</Title>
      <Temp>98°</Temp>
    </HContainer>
  )
}

export default Header;