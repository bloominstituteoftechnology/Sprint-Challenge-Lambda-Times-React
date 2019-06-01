import React from 'react';
import PropTypes from "prop-types";

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      // Nifty conditional statement formatting for this situation
      className={props.tab === props.selectedTab ? 'tab active-tab' : 'tab'}

      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
         return props.selectTabHandler(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  selectedTab: PropTypes.string,
  tab: PropTypes.string,
  handleTab:PropTypes.func
}

export default Tab;