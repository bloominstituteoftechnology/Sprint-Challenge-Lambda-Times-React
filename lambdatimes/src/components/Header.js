import React from 'react';
import styled from "styled-components";

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  // width: 100%;
  width: 1280px;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
`;

const Date = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: 25px;
  flex: 1;
`

const Title = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`

const Temperature = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: right;
  margin-right: 25px;
  flex: 1;
`

const Header = () => {
  return (
    // original code below
    // <div className="header">
    //   <span className="date">MARCH 32, 2018</span>
    //   <h1>Lambda Times</h1>
    //   <span className="temp">98°</span>
    // </div>
  

 <HeaderWrapper>
  <Date>MARCH 2, 2018</Date> 
  <Title>Lambda Times</Title>
  <Temperature>98°</Temperature> 
 </HeaderWrapper>  

  )
}

export default Header