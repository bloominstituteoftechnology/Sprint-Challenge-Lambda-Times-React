import React from "react";
import styled from "styled-components";
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

export const StyledHeader = styled.div`
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

export const HeaderTitle = styled.h1`
  font-size: 50px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

export const HeaderTemperature = styled.div`
  text-align: right;
  margin-right: 25px;
  flex: 2;
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderTemperature>MARCH 32, 2018</HeaderTemperature>
      <HeaderTitle>Lambda Times</HeaderTitle>
      <HeaderTemperature>98°</HeaderTemperature>
    </StyledHeader>
  );
};

export default Header;
