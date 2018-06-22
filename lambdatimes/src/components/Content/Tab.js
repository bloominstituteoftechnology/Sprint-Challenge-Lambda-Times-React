import React from 'react';

const Tab = ({tab, selected, selectTabHandler}) => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  let selectedClass = 'tab'
  if (tab === selected) {
    selectedClass = 'tab active-tab'
  }
  return (
    <div
      className={selectedClass}
      onClick={() => {selectTabHandler(tab)}}
    >
      {tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.

export default Tab;