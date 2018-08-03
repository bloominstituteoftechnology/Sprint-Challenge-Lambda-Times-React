import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const Header = styled.header`
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

const Title = styled.title`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  display: inherit;
  text-align: center;
  color: #000;
`;

const Span = styled.span`
align-self: flex-end;
align-items: center;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const Date = Span.extend`
 margin-left: 25px;
`;

const Temp = Span.extend`
text-align: right;
  margin-right: 25px;
`;
const HeaderContainer = () => {
  return (
    <Header>
      <Date>SMARCH 32, 2018</Date>
      <Title>Lambda Times</Title>
      <Temp>98°</Temp>
    </Header>
  );
}

export default HeaderContainer;