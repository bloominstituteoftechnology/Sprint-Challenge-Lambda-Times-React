import React from "react";
import PropTypes from "prop-types";

const Tab = ({ selectTabHandler, selected, tab }) => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  const selectedClass = "tab";
  const activeTab = "active-tab";
  return (
    <div
      className={` ${selectedClass} ${selected ? activeTab : ""}`}
      onClick={selectTabHandler(tab)}
      /* Replace this dummy click handler function with your selectTabHandler function from props */
    >
      {tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  selectedClass: PropTypes.string,
  activeTab: PropTypes.string
};

export default Tab;
