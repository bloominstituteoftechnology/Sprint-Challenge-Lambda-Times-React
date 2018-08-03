import React from 'react';

const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  const selectedClass = ()=>{
    if (props.tab === props.selectedTab){
      return "tab active-tab"
    }
    return "tab"
  }
  return (
    <div
      className={selectedClass()}
      onClick={() => {/* Replace this dummy click handler function with your selectTabHandler function from props */}}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.

export default Tab;