import React from 'react';
import PropTypes from "prop-types";

const Tab = props => {
  //  deconstruct
  const { selectedTab, selectedTabHandler } = props
  /* Using your props, determine if the `tab` prop matches the 
  `selectedTab` prop, if they match, the className should be: 
  'tab active-tab', if it is not it should just be 'tab'*/
  // {console.log("Tab props: ", props)}
  return (
    /* Replace this dummy click handler function with your selectTabHandler 
    function from props you'll need to pass the `tab` in as an argument to 
    this handler. */
    <div
      className={selectedTab ? 'tab active-tab' : 'tab'}
      onClick={selectedTabHandler}>
      {props.tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.

export default Tab;
