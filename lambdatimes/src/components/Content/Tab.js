import React from 'react';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

      const matches = props.tab === props.selectedTab;

      // if (matches === true) {
      //   return 'tab active-tab';
      // } else {
      //   return 'tab';
      // }
      
  return (
    <div
      //className={""}

      onClick={() => {
        props.selectTabHandler(props.tab);
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
