import React from 'react';
import styled from 'styled-components';

const HeaderCon = styled.div`
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

const HeaderHeading = styled.h1`
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
  flex: 1;
  margin-left: ${props => props.date ?  "25px" : null};
  margin-right: ${props => props.temp ?  "25px" : null};
  text-align: ${props => props.temp ? "right": null};
`

const Header = () => {
  return (
    <HeaderCon>
      <HeaderSpan date >MARCH 32, 2018</HeaderSpan>
      <HeaderHeading>Lambda Times</HeaderHeading>
      <HeaderSpan temp>98°</HeaderSpan>
    </HeaderCon>
  )
}

export default Header