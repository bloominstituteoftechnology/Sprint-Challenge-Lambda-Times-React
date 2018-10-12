import React from "react";

const Tab = props => {
 
  if (props.tab === props.selectedTab) {
    return (
      <div
        className={"tab active-tab"}
      >
        {props.tab.toUpperCase()}
      </div>
    );
  } else {
    return (
      <div
        className={"tab"}
        onClick={() => {
          props.selectTabHandler(props.tab)
        }}
      >
        {props.tab.toUpperCase()}
      </div>
    );
  }
};

// Make sure you include PropTypes on your props.

export default Tab;
