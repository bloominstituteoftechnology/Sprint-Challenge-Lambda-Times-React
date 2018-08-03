import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  const selectedClass = 'tab'
  return (
    <div
      className={""}
      // {.props.selectTabHandler} {/* Replace this dummy click handler function with your selectTabHandler function from props */}}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.

Tab.PropTypes= {
  tab: PropTypes.shape()
};

export default Tab;