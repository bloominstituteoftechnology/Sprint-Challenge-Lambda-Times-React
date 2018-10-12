import React from 'react';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      let selected = false;
      if (props.tab === props.selectedTab) {
        selected = true;
      }
  return (
    <div
      className={selected ? 'tab active-tab' : 'tab'}//first time using this kind of cool
      onClick={() =>  props.selectTabHandler(props.tab)}//this was a pain and I am not sure if there is a better way to do this without invoking the function
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
