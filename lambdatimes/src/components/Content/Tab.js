import React from 'react';

const Tab = ({ tab, selectedTab, selectTabHandler }) => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

  return (
    <div
      className={tab === selectedTab ? 'selectedTab' : 'tab'}
      onClick={() => selectTabHandler(tab)}
    >
      {tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
