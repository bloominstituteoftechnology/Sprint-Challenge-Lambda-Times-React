import React from 'react';
import TabStyle from '../Styles/Tab'

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      let color = '#fff';
      let background = '#333';
      let border = 'none';
      
      if(props.tab === props.selectedTab) {
        color = '#333';
        background = '#fff'; 
        border = '2px solid #333';
      }
  return (
    <div
      className={''}
      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
         props.selectTabHandler(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
