import React from 'react';
import PropTypes from 'prop-types';
const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  const selectedClass = 'tab'
  return (
    <div
      className={""}
      onClick={() => {props.selectTabHandler}}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.
Tab.PropTypes = {
  headline: PropTypes.string,
  tab: PropTypes.string,
  img: PropTypes.string,
  author: PropTypes.string
}
export default Tab;