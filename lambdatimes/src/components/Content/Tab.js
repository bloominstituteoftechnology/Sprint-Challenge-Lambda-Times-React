import React from 'react';
import PropTypes from 'prop-types';

// props: key={i} tab={tab} selectedTab={props.selectedTab} handleSelect={props.handleSelect}
const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  const selectedClass = 'tab'
  return (
    <div
      className={""}
      onClick={() => {props.handleSelect}}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.
Tab.PropTypes = {
  tab: PropTypes.string
}

export default Tab;