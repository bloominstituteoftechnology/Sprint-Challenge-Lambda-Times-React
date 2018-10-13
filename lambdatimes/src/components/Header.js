import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {

  const Header = styled.div`
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
  .header {
    width: 1280px;
    }
  }
  
  `;

  const Header_span = styled.div`
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-left: 25px;
    flex: 1;
  
  `;

  const Header_h1 = styled.div`
     font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
  
  `;

  const Header_temp = styled.div`
    text-align: right;
    margin-right: 25px;
    flex: 1;
    
  `;

  return (


    <Header>
      <Header_span> MARCH 32, 2018</Header_span>
      <Header_h1>Lambda Times</Header_h1>
      <Header_temp>98°</Header_temp>
    </Header>




  )
};

export default Header