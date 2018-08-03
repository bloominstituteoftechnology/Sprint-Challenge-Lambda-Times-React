import React from 'react';
import {StyledHeader, StyledDate, StyledTemp} from './StyledComponents'

const Header = () => {
  return (
    <StyledHeader>
      <StyledDate>
        SMARCH 32, 2018
      </StyledDate>
      <h1>Lambda Times</h1>
      <StyledTemp>
        98°
      </StyledTemp>
  </StyledHeader>
  )
}

export default Header