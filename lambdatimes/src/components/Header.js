import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const Head = styled.div`

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
  Head {
    width: 1280px;
  }
}
`
const HeadSpan1 = styled.span`
margin-left: 25px;
  flex: 1;
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`
const Headh1 = styled.h1`
font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`
const HeadSpan2 = styled.span`
text-align: right;
  margin-right: 25px;
  flex: 1;
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`
const Header = () => {
  return (
    <Head>
      <HeadSpan1>SMARCH 32, 2018</HeadSpan1>
      <Headh1>Lambda Times</Headh1>
      <HeadSpan2>98°</HeadSpan2>
    </Head>
  )
}

export default Header