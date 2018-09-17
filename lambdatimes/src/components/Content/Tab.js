import React from 'react';
import propTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={props.tab === props.selectedTab ? "tab active-tab" : "tab"}
      onClick={(e) => props.selectedTabHandler(e, props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  selectedTabHandler: propTypes.func.isRequired, 
  selectedTab: propTypes.string.isRequired, 
  tab: propTypes.string.isRequired
  
}

export default Tab;
