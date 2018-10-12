import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../styleComponents.js';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  let TabComponent = styles.Tab;
  if(props.tab === props.selectedTab){ TabComponent = styles.TabActive}
  return (
    <TabComponent
      onClick={clickEvent => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
        clickEvent.preventDefault();
        props.selectTabHandler(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </TabComponent>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string.isRequired
};

export default Tab;
