import React from "react";
import styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file
// const StyledHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: row;
//   /* background-color: #fff; */
//   background-color: rgb(52.3%, 13.2%, 4.5%);
//   border-bottom: 1px solid lightgrey;
//   width: 100%;
//   height: 120px;
//   margin-top: 44px;
//   padding-bottom: 15px;
// `;

// const StyledH1 = styled.h1`
//   font-size: 60px;
//   font-family: Didot, serif;
//   font-weight: bold;
//   flex: 8;
//   text-align: center;
//   color: rgb(255, 255, 255);
// `;

// const StyledSpan = styled.span`
//   align-self: flex-end;
//   font-size: 11px;
//   font-weight: bold;
//   letter-spacing: 1px;
// `;

const Header = () => {
  return (
    <div className="header">
      <span className="date">HAWKTOBER 12, 2018</span>
      <h1>Lambda Times</h1>
      <span className="temp">31°</span>
    </div>
  );
};

export default Header;
