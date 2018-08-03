import React from 'react';
import PropTypes from 'prop-types'

const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  console.log(selectedClass)
  const selectedClass = props.tab === props.selectedTab? 'tab active-tab': 'tab'
  return (
    <div
      id={props.tab}
      className={selectedClass}
      onClick={props.selectTabHandler}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

Tab.protoType = {
  tab: PropTypes.string,
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
}

// Make sure you include PropTypes on your props.

export default Tab;