import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  console.log(props)
  let className;
  if (props.selectedTab === props.tab) {
    className = ' active-tab'
  }
  /* Using your props, determine if the `tab`
   prop matches the `selectedTab` prop, 
      if they match, the className should be: 
      'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={'tab'}
      onClick={props.selectedTab}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string
  };
// Make sure you include PropTypes on your props.

export default Tab;
