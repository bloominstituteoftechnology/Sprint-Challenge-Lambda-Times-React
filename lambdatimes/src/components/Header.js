import React from 'react';
import styled from 'styled-components' ;

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
{/*
// const Header = () => {
//   return (
//     <div className="header">
//       <span className="date">SMARCH 32, 2018</span>
//       <h1>Lambda Times</h1>
//       <span className="temp">98°</span>
//     </div>
//   )
// }
*/}
const Header = () => {
  return (
    <HeaderClass>
      <HeaderDate>SMARCH 32, 2018</HeaderDate>
      <HeaderH1>Lambda Times</HeaderH1>
      <HeaderTemp>98°</HeaderTemp>
    </HeaderClass>
  )
}

export default Header ;

const HeaderClass = styled.div`
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
const HeaderDate = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;

    margin-left: 25px;
    flex: 1;
`;
const HeaderH1 = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;
const HeaderTemp = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;

    text-align: right;
    margin-right: 25px;
    flex: 1;
`;
// const HeaderSpan = styled.span`
//   align-self: flex-end;
//   font-size: 11px;
//   font-weight: bold;
//   letter-spacing: 1px;
// `;