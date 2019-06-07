import React from 'react';
import PropTypes from "prop-types";



const Tab = props => {
  if (props.tab === props.selectedTab) {
    Tab.className="tab active-tab"
  } else {
    Tab.className="tab"
  }
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={''}
      onClick={(tab) => {
        props.selectTabHandler(props.tab)
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

Tab.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      selectTabHandler: PropTypes.func.isRequired,
      selectedTab: PropTypes.func.isRequired,
      tab: PropTypes.string.isRequired
    })
  )
}