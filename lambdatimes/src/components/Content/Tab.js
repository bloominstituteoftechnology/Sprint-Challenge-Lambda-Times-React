import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ tab, selectedTab, selectTabHandler }) => {
  return (
    <div
      className={tab === selectedTab ? 'tab' : 'tab active-tab'}
      onClick={() => selectTabHandler(tab)}
    >
      {tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
};
export default Tab;
