import React from 'react';
import {Head, HeaderSpanTemp,HeaderSpanDate ,HeaderH1} from './HeaderStyles';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <Head>
      <HeaderSpanDate>SMARCH 32, 2018</HeaderSpanDate>
      <HeaderH1>Lambda Times</HeaderH1>
      <HeaderSpanTemp>98°</HeaderSpanTemp>
    </Head>
  )
}

export default Header;