import React from 'react';
import Tabs from './Tabs';

const Tab = props => {

  
console.log(props.tab)
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
    
    return (
    <div
      className={''}
      onClick={() => {  
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.each}

    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
