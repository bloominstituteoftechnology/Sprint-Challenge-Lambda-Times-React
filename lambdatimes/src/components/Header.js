import React from 'react'
import { Container, H1, TempSpan, DateSpan } from '../styles/Header'

const Header = () => {
  return (
    <Container>
      <DateSpan>SMARCH 32, 2018</DateSpan>
      <H1>Lambda Times</H1>
      <TempSpan>98°</TempSpan>
    </Container>
  )
}

export default Header
