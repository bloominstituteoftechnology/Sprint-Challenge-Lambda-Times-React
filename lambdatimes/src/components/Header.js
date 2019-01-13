import React from "react";
import styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file
const HeaderContainer = styled.div`
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
    .header {
      width: 1280px;
    }
  }

  h1 {
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
  }

  span {
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
  }

  .date {
    margin-left: 25px;
    flex: 1;
  }

  .temp {
  text-align: right;
  margin-right: 25px;
  flex: 1;
}
`;

const Header = () => {
  return (
    <HeaderContainer>
      <span className="date">January 12, 2019</span>
      <h1>Lambda Times</h1>
      <span className="temp">50° Keizer, OR.</span>
    </HeaderContainer>
  );
};

export default Header;
