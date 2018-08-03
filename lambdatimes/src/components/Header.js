import React from 'react';
import Styled from 'styled-components';
import {HeaderSpan} from './ReusableStyles/Reusables';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const HeadWrapper = Styled.div`
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
`;

const Head = Styled.h1`
font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;


const Header = () => {
  return (
    <HeadWrapper>
      <HeaderSpan date>SMARCH 32, 2018</HeaderSpan>
      <Head>Lambda Times</Head>
      <HeaderSpan temp>98°</HeaderSpan>
    </HeadWrapper>
  )
}

export default Header