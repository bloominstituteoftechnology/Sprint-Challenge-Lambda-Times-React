import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  let active = 'tab';
  
  if (props.selectedTab === props.tab) {
    active = 'tab active-tab';
  } else {
    active;
  }

  return (
    <div
      className={active}
      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
        return props.changeSelected(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tabs: PropTypes.array,
  changeSelected: PropTypes.func,
  selectedTab: PropTypes.string
};

export default Tab;
