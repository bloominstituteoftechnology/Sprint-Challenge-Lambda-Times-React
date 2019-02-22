import React from 'react';
// import{
//   StyledHeader,
//   StyledHeaderText
// } from './TopStyling'
import moment from 'moment'
import styled from "styled-components";

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin: 44px auto;
  padding-bottom: 15px;
  @media (min-width: 1280px) {
    width: 1280px;
  }
  h1 {
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
  }
`;

const StyledHeaderText = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  flex: 1;

  ${props => (props.timeStamp ? `margin-left: 35px` : null)}
  `

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderText timeStamp>:Last Update: <br></br><br></br>{moment().format('MMM DD YYYY, h:mm A')}</StyledHeaderText>
      <h1>Lambda Times</h1>
      <StyledHeaderText temp>98°</StyledHeaderText>
    </StyledHeader>
  )
}

export default Header