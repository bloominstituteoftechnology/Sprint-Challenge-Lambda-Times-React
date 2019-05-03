import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={`tab ${props.active? "active-tab" : ""}`}
      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
         props.selectTabHandler(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};
Tab.propTypes =
{
  tab: PropTypes.string.isRequired,
  active: PropTypes.bool
}
// Make sure you include PropTypes on your props.

export default Tab;
