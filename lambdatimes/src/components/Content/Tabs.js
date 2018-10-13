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

const StyledTab =styled.div `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
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
    <StyledTab>{props.tabs.map(tab => <Tab key={tab} tab={tab}/>)}</StyledTab>
      </Topics>
    </TabsStyle>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
