import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

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

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
}

export default Tabs;
