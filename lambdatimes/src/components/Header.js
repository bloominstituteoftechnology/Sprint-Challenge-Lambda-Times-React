import React from 'react';
import { Head, Spans, Date, Temp, Title } from '../CSS/styled-components'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <Head>
      <Spans>
      <Date>SMARCH 32, 2018</Date>
      <Title>Lambda Times</Title>
      <Temp>98°</Temp>
      </Spans>
    </Head>
  )
}

export default Header