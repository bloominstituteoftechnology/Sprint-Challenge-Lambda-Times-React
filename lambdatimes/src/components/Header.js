import React from 'react';
import {Header1, HeaderHOne, HeaderSpanDate, HeaderSpanTemp} from './HeaderCss';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file




const Header = () => {
  return (
    <Header1>
      <HeaderSpanDate>SMARCH 32, 2018</HeaderSpanDate>
      <HeaderHOne>Lambda Times</HeaderHOne>
      <HeaderSpanTemp>98°</HeaderSpanTemp>
    </Header1>
  )
};



// const Header2 = () => {
//   return (
//     <div className="header">
//       <span className="date">SMARCH 32, 2018</span>
//       <h1>Lambda Times</h1>
//       <span className="temp">98°</span>
//     </div>
//   )
// }

export default Header;