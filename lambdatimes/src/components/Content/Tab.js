import React from 'react';

const Tab = {tab, selectedTab, selectTabHandler} => {
  const className = (selectedTab) ? 'tab active-tab' : 'tab';
  return (
    <div
      className={className}
      onClick={() => {
        selectTabHandler(tab);
      }}
    >
      {tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
