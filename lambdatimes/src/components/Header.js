import React from 'react';
import styled from "styled-components";
import { StyledHeader, StyledHeaderH1, StyledDate, StyledTemp } from "./styles"
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <StyledHeader>
      <StyledDate>SMARCH 32, 2018</StyledDate>
      <StyledHeaderH1>Lambda Times</StyledHeaderH1>
      <StyledTemp>98°</StyledTemp>
    </StyledHeader>
  )
}

export default Header