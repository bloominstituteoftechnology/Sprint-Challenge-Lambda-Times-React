import React from 'react';
import PropTypes from 'prop-types'

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
const Tab = (props) => {
    /* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
      if they match, the className should be: 'tab active-tab',
      if it is not it should just be 'tab'*/
  return (
    <div
      className={''}
      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
    return (

        <div
            className={props.tab === props.selectedTab ? 'tab active-tab': 'tab'}
            onClick={() => {props.selectTabHandler(props.tab)}}
            /* Replace this dummy click handler function with your selectTabHandler function from props
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};


Tab.propTypes = {
    tabData: PropTypes.arrayOf(PropTypes.string),
    tab: PropTypes.string,
    selectedTab: PropTypes.string,
    className: PropTypes.string
}
// Make sure you include PropTypes on your props.

export default Tab;
