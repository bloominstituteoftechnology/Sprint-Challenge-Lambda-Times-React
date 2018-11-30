import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fdfcfc;
  border-bottom: 1px solid #f2f2f2;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
}
@media (min-width: 1280px) {
  .header {
    width: 1280px;
  }
  h1 {
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #0000;
}
span {
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
}
`;

const Date = styled.span`
  margin-left: 25px;
  flex: 1;
`;

const Temp = styled.span`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Date>November 30, 2018</Date>
      <h1>Lambda Hard-Times</h1>
      <Temp>32°</Temp>
    </StyledHeader>
  );
};

export default Header;
