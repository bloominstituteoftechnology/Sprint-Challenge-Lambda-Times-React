import React from 'react';

const Tab = props => {
    const selectedClass = `tab${props.selectedTab === props.tab ? 'active-tab' : ''}`;
  return (
    <div className={selectedClass} onClick={props.selectTabHandler}>
    {props.tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.

export default Tab;