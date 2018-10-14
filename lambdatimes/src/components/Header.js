import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const Headerwrapper = styled.div`
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
const H1wrapper = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`
const Span = styled.span`
align-self: flex-end;
font-size: 11px;
font-weight: bold;
letter-spacing: 1px;
flex: 1;
${props => props.spandate && `
margin-left: 25px;

`}
${props => props.spantemp && `
text-align: right;
margin-right: 25px;
`}
`
const Header = () => {
  return (
      <Headerwrapper>
        <Span>SMARCH 32, 2018</Span>
        <H1wrapper>Lambda Times</H1wrapper>
        <Span>98°</Span>
      </Headerwrapper>

    /*
    <div className="header">
      <span className="date">SMARCH 32, 2018</span>
      <h1>Lambda Times</h1>
      <span className="temp">98°</span>
    </div> */
  )
}

export default Header