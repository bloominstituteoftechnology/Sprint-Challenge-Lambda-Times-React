import React from 'react';

const Tab = props => {
  let selectedClass="tab";
    if(props.selectedTab===props.tab){
      selectedClass="tab active-tab";
    } else{
      selectedClass="tab";
    }
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={selectedClass}
      onClick={props.selectedTabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
