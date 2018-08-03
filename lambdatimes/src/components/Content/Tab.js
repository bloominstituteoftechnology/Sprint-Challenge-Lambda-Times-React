import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  const selectedClass = `tab ${props.selected === props.tab ? 'active-tab':''}`; 
  return (
    <div
      className={"selectedClass"}
      onClick={() => props.selectTabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.
Tab.proptypes = {
  selectTabHandler: PropTypes.func,
 selected: PropTypes.string,
 tab: PropTypes.string
}

export default Tab;