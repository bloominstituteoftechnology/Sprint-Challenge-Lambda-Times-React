import React from "react";

const Tab = props => {
  let tabClasses = "";
  if (props.tab === props.selectedTab) {
    tabClasses = "tab active-tab";
  } else {
    tabClasses = "tab";
  }

  return (
    <div
      className={tabClasses}
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
