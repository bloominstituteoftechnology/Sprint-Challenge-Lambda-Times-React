import React from 'react';
import Tab from './Tab';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tab => <Tab tab={tab} selectedTab={props.selectedTab} selectTabHandler={props.selectTabHandler} key={tab}/>)}
      </div>
    </div>
  );
}

// Make sure to use PropTypes to validate your types!
export default Tabs;
