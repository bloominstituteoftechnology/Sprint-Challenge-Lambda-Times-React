import React from "react";

const Tab = props => {
  // console.log(props.tab)
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  /*
    `onClick` and similar things like that will take the function and pass the
    event object through it. 
  */
  let tabSelectedClassName = props.tabName === props.selectedTab;
  return (
    <div
      className={`tab ${tabSelectedClassName ? "active-tab" : ""}`}
      onClick={() => {
        props.selectTabHandler(props.tabName);
      }}
      /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
    >
      {props.tabName}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
