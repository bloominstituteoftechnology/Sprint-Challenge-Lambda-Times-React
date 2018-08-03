import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const HeaderContent = styled.header`
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
`;

const Headerdiv = styled.h1`
font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;


const Header = () => {
  return(
<HeaderContent>
<Headerdiv>
<span class="date">MARCH 32, 2018</span>
  <h1>Lambda Times</h1>
  <span class="temp">98°</span>
  </Headerdiv>
  </HeaderContent>
  );
};

export default Header;


// const Header = () => {
  //   return (
  //     <div className="header">
  //       <span className="date">SMARCH 32, 2018</span>
  //       <h1>Lambda Times</h1>
  //       <span className="temp">98°</span>
  //     </div>
  //   )
  // }