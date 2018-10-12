import React from "react";
import styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file
export const StyledHeader = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  margin-top: 44px;
  padding-bottom: 15px;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;
export const HeaderTitle = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;
export const HeaderSpan = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const HeaderDatenTemp = styled.div`
  text-align: right;
  margin-right: 25px;
  flex: 2;
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderDatenTemp>MARCH 32, 2018</HeaderDatenTemp>
      <HeaderTitle>Lambda Times</HeaderTitle>
      <HeaderDatenTemp>98°</HeaderDatenTemp>
    </StyledHeader>
  );
};

export default Header;
