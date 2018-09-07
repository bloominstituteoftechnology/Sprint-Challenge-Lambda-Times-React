import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const HeaderStyle = styled.div`

`;

const Date = styled.div`

`;
const Temp = styled.div`

`;


const Header = () => {
  return (
    <HeaderStyle>
      <Date>SMARCH 32, 2018</Date>
      <h1>Lambda Times</h1>
      <Temp>98°</Temp>
    </HeaderStyle>
  )
}

export default Header