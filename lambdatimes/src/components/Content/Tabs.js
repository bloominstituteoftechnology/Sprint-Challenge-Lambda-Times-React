// libraries import
import React from 'react';
import PropTypes from 'prop-types';

// components import
import Tab from './Tab';

const Tabs = props => {
  // destructuring props for readability
  const {tabs, selectedTab, selectTabHandler} = {...props}
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {
          // map over the tabs
          tabs.map(
            (tab, i) => (
              <Tab
                key={i}
                tab={tab}
                selectedTab={selectedTab}
                selectTabHandler={selectTabHandler}
              />
            ))
        }
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,

}

export default Tabs;
