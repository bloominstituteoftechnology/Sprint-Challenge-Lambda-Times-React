import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  const selectedClass = 'tab'
  return (
    <div
      className={props.tab === props.selectedTab ? "tab active-tab" : "tab"}
      onClick={() => {
      /* Replace this dummy click handler function with your selectTabHandler function from props */
        props.selectedTabHandler(props.tab)
    }}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.arrayOf(PropTypes.string),
  selectedTab: PropTypes.string,
  selectedTabHandler: PropTypes.func
}

export default Tab;