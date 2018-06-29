import React from 'react';

const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  const selectedClass = 'tab'
  return (
    <div
      className={props.selectedTab === props.oneTab ? selectedClass + 'active-tab' : selectedClass}
      onClick={props.selectTabHandler(props.oneTab)}
    >
      {props.oneTab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.

export default Tab;