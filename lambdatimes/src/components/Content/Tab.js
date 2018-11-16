import React from 'react';

const Tab = props => {

  let activity = '';
  if (props.selectedTab === 'all' || props.selectedTab === props.tab) {
    activity = 'tab active tab';
  }
  else {
    activity = 'tab';
  }
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div className={activity} onClick={() => props.selectTabHandler(props.tab)}>
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
