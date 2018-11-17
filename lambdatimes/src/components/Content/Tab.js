import React from 'react';

const Tab = props => {
    if (props.tab)
  return (
    <div
      className={ props.selected === props.selectedTab ? 'tab active-tab' : 'tab'}
      onClick={() => props.selectTabHandler(props.tab)}>
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
