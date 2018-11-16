import React from "react";

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

  if (props.tab === props.selectedTab) {
    const tabClass = "tab active-tab";
  } else {
    const tabClass = "tab";
  }

  return (
    <div className={activeTab} onClick={props.selectTabHandler} tab={props.tab}>
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
