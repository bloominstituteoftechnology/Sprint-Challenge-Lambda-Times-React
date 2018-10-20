import React from 'react'
import styled from 'styled-components'

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgray;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

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
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 1px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
  }
`

const HeaderDate = styled.span`
  margin-left: 25px;
  flex: 1;
`

const HeaderTemp = styled.span`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`

const FullHeader = () => {
  return (
    <Header>
      <HeaderDate>SMARCH 32, 2018</HeaderDate>
      <h1>Lambda Times</h1>
      <HeaderTemp>98°</HeaderTemp>
    </Header>
  )
}

export default FullHeader;
