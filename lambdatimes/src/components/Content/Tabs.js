import React from 'react';
import Tab from './Tab';
const Tabs = ({tabs, selectedTabHandler, selectedTab}) => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {tabs.map((tab, i) => <Tab tab={tab} selectedTabHandler={selectedTabHandler} selectedTab={selectedTab} key={i}/>) }
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
