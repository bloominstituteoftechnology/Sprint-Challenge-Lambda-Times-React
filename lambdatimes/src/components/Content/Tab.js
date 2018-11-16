import React from 'react';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      console.log('ClassName', this.className)
      if (props.tab === props.selectedTab) {
        this.className = 'tab active-tab'
      } else {
        this.className = 'tab'
      }
  return (
    <div
      className={''}
      onClick={ tab => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
        props.selectTabHandler(tab)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
