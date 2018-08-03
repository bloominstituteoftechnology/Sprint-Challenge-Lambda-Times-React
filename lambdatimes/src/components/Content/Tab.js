import React from 'react';

const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  let selectedClass = 'tab';
  if (props.tab === props.selectedTab) selectedClass = selectedClass + 'active-tab'

  return (
    <div
      className={selectedClass}
      onClick={() => {props.selectTabHandler(props.tab)}} >
        
        {/* Replace this dummy click handler function with your selectTabHandler function from props */}

      {props.tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.

export default Tab;