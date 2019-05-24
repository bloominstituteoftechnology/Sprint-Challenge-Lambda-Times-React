import React from 'react';
/* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
    if they match, the className should be: 'tab active-tab',
    if it is not it should just be 'tab'*/

    /* Replace this dummy click handler function with your selectTabHandler function from props
     you'll need to pass the `tab` in as an argument to this handler. */
const Tab = props => {

  return (
    <div
      className={'tab active-tab'}
      onClick={() => {

      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
