import React from 'react';
import PropTypes from "prop-types";

const Tab = props => {
  /*  DONE
      Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      let classname = ''; 
      if (props.tab === props.selectedTab) {
        classname = 'tab active-tab';
      } else {
        classname = 'tab';
      }
  return (
    <div
      className={classname}
      onClick={() => {
        /* DONE 
        Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
          props.selectTabHandler(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// DONE
// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string
}


export default Tab;

