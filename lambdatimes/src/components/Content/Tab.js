import React from 'react';

const Tab = props => {
  const selectedClass =
    props.selectedTab === props.tab ? 'tab active-tab' : 'tab';
  return (
    <div
      className={selectedClass}
      onClick={() => {
        props.selectTabHandler(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
