import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={props.selectedTab === props.text ? 'tab active-tab' : 'tab'}
      onClick={ () => {
        props.selectTabHandler(props.text)
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.text.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  text: PropTypes.string,
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string,
}

export default Tab;
