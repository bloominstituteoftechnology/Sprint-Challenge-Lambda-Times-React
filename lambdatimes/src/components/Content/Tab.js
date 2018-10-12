import React from 'react';

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

// Make sure you include PropTypes on your props.

export default Tab;
