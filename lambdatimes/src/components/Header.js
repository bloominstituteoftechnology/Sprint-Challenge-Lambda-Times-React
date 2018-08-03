import React from 'react';
import { HeaderWrapper, HeaderH1, DateSpan,
          TempSpan } from './StyledComponents';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderWrapper>
      <DateSpan>SMARCH 32, 2018</DateSpan>
      <HeaderH1>Lambda Times</HeaderH1>
      <TempSpan>98°</TempSpan>
    </HeaderWrapper>
  )
}

export default Header
