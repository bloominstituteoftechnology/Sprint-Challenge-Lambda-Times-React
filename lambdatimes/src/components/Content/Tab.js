import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

      if (props.tab === props.selectedTab()){
        props.tabs.className = 'tab active-tab'
      }
      else { props.tabs.className = 'tab'}
  return (
    <div
      className={''}
      onClick={props.selectTabHandler}
    >
      {/* {props.tabs.toUpperCase()} */}
    </div>
  );
};

// Make sure you include PropTypes on your props.

this.props = {
  props: PropTypes.string.isRequired
}

export default Tab;
