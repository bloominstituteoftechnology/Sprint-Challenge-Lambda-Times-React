import React from 'react';
import styled from 'styled-components';

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
  @media (min-width: 1200px) {
    width: 1280px;
  }
`;

const HeaderSpan = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const HeaderH1 = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const HeaderDateSpan = HeaderSpan.extend`
  margin-left: 25px;
  flex: 1;
`;

const HeaderTempSpan = HeaderSpan.extend`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

// const Header = () => {
//   return (
//     <div className="header">
//       <span className="date">SMARCH 32, 2018</span>
//       <h1>Lambda Times</h1>
//       <span className="temp">98°</span>
//     </div>
//   )
// }

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderDateSpan>MARCH 32, 2018</HeaderDateSpan>
      <HeaderH1>Lambda Times</HeaderH1>
      <HeaderTempSpan>98°</HeaderTempSpan>
    </HeaderContainer>
  );
};

export default Header;
