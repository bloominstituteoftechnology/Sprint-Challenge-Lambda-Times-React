import React from 'react';
import styled, {css} from 'styled-components';

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: #fff;
    border-bottom: 1px solid grey;
    width: 100%;
    height: 120px;
    margin-top: 44px;
    padding-bottom: 15px;
      @media (min-width: 1280px) {
        width: 1280px;
      }

`

const Date = styled.span`
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;

    margin-left: 25px;
    flex: 1;
`
const Temp = styled.span`
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;

    text-align: right;
    margin-right: 25px;
    flex: 1;
`
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    // <div className="header">
      <Head>
      {/* <span className="date">SMARCH 32, 2018</span> */}
      <Date>MARCH 31, 2018</Date>
      <h1>Lambda Times</h1>
      {/* <span className="temp">98°</span> */}
      <Temp>98°</Temp>
      </Head>
    // </div>
  )
}

export default Header