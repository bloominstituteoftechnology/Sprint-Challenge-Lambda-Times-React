import React from "react";
import PropTypes from "prop-types";

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  // props.classCheck = "";

  // if (props.tab === props.selectedTab) {
  //   classCheck = "tab active-tab";
  // } else {
  //   classCheck = "tab";
  // }
  return (
    <div
      className={''}
      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    />
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
