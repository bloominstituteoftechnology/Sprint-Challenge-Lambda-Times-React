import React from "react";

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  const selected = "tab";
  return (
    <div
      className={`tab ${props.selected ? "active-tab" : ""}`}
      onClick={() => props.selected.TabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
