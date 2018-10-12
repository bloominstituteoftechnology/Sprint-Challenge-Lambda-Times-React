import React from 'react';
import { MyHeader, MyDate, MyTemp } from "./Styles"
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <MyHeader>
     <MyDate>MARCH 12, 2018</MyDate>
      <h1>Lambda Times</h1>
      <MyTemp>98°</MyTemp>
      </MyHeader>
  )
}

export default Header