import React from 'react';
import Tab from './Tab';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(item => <Tab key = {item.index} tab = {item} />)}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
