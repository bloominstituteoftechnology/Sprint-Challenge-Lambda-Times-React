import React from 'react';
import style from 'styled-components';

const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  const selectedClass = 'tab';
  console.log(props);
  
  return (
    <div
      className={""}
      onClick={() => {props.changeSelected(props.tab)}}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.

export default Tab;