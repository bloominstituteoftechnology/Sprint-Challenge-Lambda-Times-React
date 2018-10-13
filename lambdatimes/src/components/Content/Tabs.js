import React from 'react';
import Tab from './Tab';
import '../../CSS/index.css'
import styled from 'styled-components'

const TabsStyle = styled.div `
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
`

const Topics = styled.div`
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
`

const Title = styled.span`
font-size: 12px;
letter-spacing: 1px;
font-weight: bold;
`

const Tabs = props => {
  return (
    <TabsStyle>
      <Topics>
        <Title>TRENDING TOPICS:</Title>
    {props.tabs.map(tab => <Tab key={tab} tab={tab}/>)}
      </Topics>
    </TabsStyle>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
