import React from 'react';
import styled from 'styled-components';


// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

export const StyledHeader = styled.div`
display: flex;
width: 100%;
height: 100px;
justify-content: space-around;
align-items: center;
background-color: white;
border-bottom: 1px solid grey;
padding-bottom: 10px;
align-self: flex-end;
`;

export const StyledH1 = styled.h1`
font-size: 50px;
text-align: center;
color: pink;
`;

export const StyledHeaderElements = styled.div`
text-align: right;
margin-right: 25px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderElements>SMARCH 32, 2018</StyledHeaderElements>
      <StyledH1>Lambda Times</StyledH1>
      <StyledHeaderElements>98°</StyledHeaderElements>
      </StyledHeader>
  )
}

export default Header