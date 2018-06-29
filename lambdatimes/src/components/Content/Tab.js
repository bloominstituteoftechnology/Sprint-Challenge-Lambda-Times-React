import React from 'react';

const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  const selectedClass = 'tab active-tab';
  const deselectedClass = 'tab';
  let newClass = '';
  if (props.tab === props.selectedTab) {
    newClass = selectedClass;
  }
  else {
    newClass = deselectedClass;
  }
  return (
    <div
      className={newClass} onClick={() => {props.selectTabHandler(props.tab)}}> {/* Replace this dummy click handler function with your selectTabHandler function from props */}
      {props.tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.

export default Tab;