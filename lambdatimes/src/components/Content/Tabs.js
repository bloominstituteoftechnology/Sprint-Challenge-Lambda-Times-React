import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import style from 'styled-components';


const TabsDiv = style.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;

  @media (min-width: 1280px) {
    .tabs {
      width: 1280px;
    }
`;

const Topics = style.div`
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
  return (
    <TabsDiv>
      <Topics>
        <Title>TRENDING TOPICS:</Title>
        {props.tabs.map((item,index) =>{
          return <Tab 
          key={index} 
          tab={item} 
          selectTabHandler={props.selectTabHandler}
          selectedTab={props.selectedTab}
          />
        })}
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </Topics>
    </TabsDiv>
  );
};


// Make sure to use PropTypes to validate your types!

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string)
}

export default Tabs;
