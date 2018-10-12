import React from 'react';
import Tab from './Tab';
const Tabs = ({tabs}) => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {tabs.map(tabInfo => <Tab tab={tabInfo}/>) }
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
