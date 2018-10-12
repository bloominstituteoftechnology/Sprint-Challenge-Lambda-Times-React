import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  let active = '';
  if(props.tabs === props.selectedTab) {
    active = 'tab active-tab';
  } else {
    active = 'tab';
  }
  return (
    <div
      className={active}
      onClick={event => {
        props.selectTabHandler(event, props.tabs);
      }}
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
    >
      {props.tabs.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  username: PropTypes.func,
  selectedTabHandler: PropTypes.string,
  tabs: PropTypes.string
};

export default Tab;
