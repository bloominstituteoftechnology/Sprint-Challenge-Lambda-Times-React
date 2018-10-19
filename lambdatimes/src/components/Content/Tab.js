import React from 'react';

const Tab = props => {
  return (
    <div className= {props.tab} 
      onClick={() => {
        props.selectedTabHandler(props.tab);
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
