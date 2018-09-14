import React from 'react';
import Tab from './Tab';
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(t => (
          <Tab
            key={t.i}
            tab={t}
            selectTabHandler={props.selectTabHandler}
            selectedTab={props.selectedTab}
            tab={props.tab}
          />
        ))}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabData: PropTypes.arrayOf(PropTypes.string)
};

export default Tabs;
