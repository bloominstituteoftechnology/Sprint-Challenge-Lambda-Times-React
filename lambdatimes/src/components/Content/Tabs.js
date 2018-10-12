import React from 'react';
import Tab from './Tab';
const Tabs = ({tabs, selectedTab, selectTabHandler}) => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {tabs.map(tab => {
          return (
            <Tab 
              selectTabHandler={selectTabHandler}
              selectedTab={selectedTab}
              tab={tab}
              key={tab}
            />
          )
        })}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
