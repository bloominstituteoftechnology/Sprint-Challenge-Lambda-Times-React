import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({selectTabHandler, selectedTab, tab}) => {
  return (
    <div
      className={tab === selectedTab ? 'tab active-tab' : 'tab'}
      onClick={() => {selectTabHandler(tab)}}
    >
      {tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
}

export default Tab;
