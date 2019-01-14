import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  max-width: 1280px;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

  `

  const Heading = styled.h1`
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
  `

  const DateTemp = styled.span`
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-left: 25px;
    flex: 1;



    ${props => props.type === 'date' ?
    `margin-left: 50px;
    flex: 1;`: null}

    ${props => props.type === 'temp' ?
    `text-align: right;
     margin-right: 50px;
     flex: 1;`: null}
  `


// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderContainer>
      <DateTemp type='date'>JANUARY 3, 2019</DateTemp>
      <Heading>Lambda Times</Heading>
      <DateTemp type="temp">35°</DateTemp>
    </HeaderContainer>
  )
}

export default Header
