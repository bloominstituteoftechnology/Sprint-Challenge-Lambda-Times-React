import React from 'react';
import style from 'styled-components';
import Tab from './Tab'

const TabsContainer = style.div`
    border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const TabsTopics = style.div`
    display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const Title = style.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;


const Tabs = props => {
  let tabs = props.tabs;
  
  return (
    <TabsContainer>
      <TabsTopics>
        <Title>TRENDING TOPICS:</Title>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/ }
            {tabs.map((el)=>{
          return <Tab selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} tab={el}/>
            })}
      </TabsTopics>
    </TabsContainer>
  )
}

// Make sure to use PropTypes to validate your types!
export default Tabs