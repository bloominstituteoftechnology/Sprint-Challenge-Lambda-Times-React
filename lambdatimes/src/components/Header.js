import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const HeaderContainer = styled.div`
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
const HeaderDate = styled.span`
  margin-left: 25px;
  flex: 1;
`

const HeaderTemp = styled.span`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`

const Headerone = styled.h1`
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
//date and temp classnames is the order
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderSpan>
      <HeaderDate>
      <span>MARCH 32, 2018</span>
      </HeaderDate>
      </HeaderSpan>
      <Headerone>
      <h1>Lambda Times</h1>
      </Headerone>
      <HeaderSpan>
      <HeaderTemp>
      <span>98°</span>
      </HeaderTemp>
      </HeaderSpan>
    </HeaderContainer>
  )
}

export default Header