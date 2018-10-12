import React from 'react';

import { TabItem } from '../Styles/Styles';
import { TabActive } from '../Styles/Styles';

const Tab = props => {
  if (props.tab === props.selected) {
    return (
      <TabActive>
        {props.tab.toUpperCase()}
      </TabActive>
    )
  }
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <TabItem onClick={(event) => {props.changeSelected(event, props.tab)}}>
      {props.tab.toUpperCase()}
    </TabItem>
  );
};

// Make sure you include PropTypes on your props.

/* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */

export default Tab;
