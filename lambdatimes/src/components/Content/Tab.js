import React from "react";
import tabs from "./Tabs";
import PropTypes from 'prop-types'

const Tab = props => {
  let tabClass;
  if (props.tab === props.selectedTab) {
    tabClass = "tab active-tab";
  } else {
    tabClass = "tab";
  }
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={tabClass}
      onClick={() => {
        {
          props.selectTabHandler(props.tab);
        }
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.func.isRequired
};

// Make sure you include PropTypes on your props.

export default Tab;
