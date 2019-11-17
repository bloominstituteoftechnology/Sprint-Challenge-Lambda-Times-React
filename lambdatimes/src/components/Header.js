import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file


const HeaderStyles = styled.div`
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

const Date = styled.div`
margin-left: 25px;
flex: 1;

`

const Temp = styled.div`
text-align: right;
margin-right: 25px;
flex: 1;
`



const Header = () => {
  return (
    <div>
    <HeaderStyles />
      <span><Date/>SMARCH 32, 2018</span>
      <h1>Lambda Times</h1>
      <span> <Temp/>98°</span>
    </div>
  )
}
  

export default Header