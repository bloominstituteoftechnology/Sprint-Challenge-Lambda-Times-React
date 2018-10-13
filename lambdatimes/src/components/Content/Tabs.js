import React from 'react';
import Tab from './Tab';
import { tabData, cardData } from '../../data';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            {tabData.map((item, index) => {
              return <Tab key={index} tab={item.tab} selectedTab={item.selected} selectTabHandler={item.changeSelected} /> 
          })}    
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
