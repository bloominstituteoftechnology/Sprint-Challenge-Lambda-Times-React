import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const Tabs = ({ tabs, onSelectTab, selectedTab }) => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {tabs.map(tab => (
          <Tab
            key={tab}
            tab={tab}
            onSelectTab={onSelectTab(tab)}
            selectedTab={selectedTab}
          />
        ))}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectTab: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired
};

export default Tabs;
