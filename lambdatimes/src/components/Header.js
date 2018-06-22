import React from 'react';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

import {
  Head, HeadTitle, HeadSpan, HeadDate, HeadTemp
} from "../ReusableStyles"

const Header = () => {
  return (
    <Head>
        <HeadSpan>
          <HeadDate>SMARCH 32, 2018</HeadDate>
        </HeadSpan>
            <HeadTitle>Lambda Times</HeadTitle>
        <HeadSpan>
          <HeadTemp>98°</HeadTemp>
        </HeadSpan>
    </Head>
  )
}

export default Header