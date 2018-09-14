import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const span = `
align-self: flex-end;
font-size: 11px;
font-weight: bold;
letter-spacing: 1px;
`;

const HeaderDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
background-color: #fff;

  }
`;



const Header = () => {
  return (

    <HeaderDiv>
      <Date>SMARCH 32, 2018</Date>
      <MainHeading>Lambda Times</MainHeading>
      <Temperature>98°</Temperature>
    </HeaderDiv>

    // <div className="header">
    //   <span className="date">SMARCH 32, 2018</span>
    //   <h1>Lambda Times</h1>
    //   <span className="temp">98°</span>
    // </div>
  )
}

export default Header