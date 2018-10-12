import React from 'react';
import Tab from './Tab';
import propType from 'prop-types';

const Tabs = props => {
  const { tabs, selectTabHandler, selectedTab } = props;
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {tabs.map((tab, index) => {
          return (
            <Tab
              selectTabHandler={selectTabHandler}
              selectedTab={selectedTab}
              tab={tab}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propType = {
  tabs: propType.object.isRequired,
  selectTabHandler: propType.func.isRequired,
  selectedTab: propType.string.isRequired
};

export default Tabs;
