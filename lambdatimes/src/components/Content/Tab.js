import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

      // looks at if the tabs matches the selected tab()
  let tabSelected = false;
  if (props.tab === props.selectedTab) {
    tabSelected = true;
  }


  //if it matches, it will chance the tab's class name to tab active-tab, otherwise it will remain tab
  // the onclick function will run the selectTabHandler function with tab as the argument(defined in the content.js folder as changeSelected)
  return (
    <div
    className={tabSelected ? 'tab active-tab' : 'tab'}
    onClick={() =>  props.selectTabHandler(props.tab)}
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
        
      >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tab: PropTypes.string,
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
}

export default Tab;
