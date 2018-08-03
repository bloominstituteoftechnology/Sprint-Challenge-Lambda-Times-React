import React from "react";

const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  console.log("Tab", props);

  const selectedClass = "tab";
  return (
    <div className={selectedClass} onClick={props.selectedTab}>
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
