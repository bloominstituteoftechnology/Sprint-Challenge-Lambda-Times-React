import React from "react";
import PropTypes from "prop-types";

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

Tab.propTypes = PropTypes.string.isRequired;

export default Tab;
