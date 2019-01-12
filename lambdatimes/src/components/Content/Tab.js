import React from "react";

const Tab = props => {
  const cName = (props.tab === props.selectedTab) ? "tab active-tab" : "tab";
  console.log(cName)
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={cName}
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
