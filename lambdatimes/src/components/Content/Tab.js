import React from "react";
import PropTypes from "prop-types";

const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  let selectedClass = tab;
  if (props.tab === props.selectedTab) {
    selectedClass = "tab active-tab";
  } else {
    selectedClass = "tab";
  }
  return (
    <div className={selectedClass} onClick={props.selectTabHandler}>
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.PropTypes = {
  key: PropTypes.string,
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
};

export default Tab;
