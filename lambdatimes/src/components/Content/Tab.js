import React from 'react';

/*
Received as props from Tabs.js

  key={i} 
  tab={t}
  selectedTab={props.selectedTab} 
  selectedTabHandler={props.selectedTabHandler}
*/

const Tab = props => { 
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  if (props.tab)
  return (
     /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */ 

    <div className={ props.tab === props.selectedTab ? "tab active-tab" : "tab" }
         onClick={ () => {props.selectedTabHandler(props.tab)} } >

      {props.tab.toUpperCase()}

    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
