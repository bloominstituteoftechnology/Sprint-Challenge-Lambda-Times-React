import React from 'react';
import PropTypes from 'prop-types'; // loads PropTypes validation library

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={''}
      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string,  // validates PropType as string
  selectedTab: PropTypes.string, // validates PropType as string
  selectTabHandler: PropTypes.func // validates PropType as function
}
export default Tab;
