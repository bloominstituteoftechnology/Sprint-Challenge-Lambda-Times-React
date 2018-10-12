import React from 'react';

const Tab = props => {
  return (
    <div
      className={(props.tab !== props.selected) ? "tab active-tab" : "tab" }
      onClick={() => {
         props.changeSelected(props.tab)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
