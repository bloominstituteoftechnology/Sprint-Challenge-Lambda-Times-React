import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  console.log(props.tab)
  if (props.selectedTab === props.tab) {
    return (
      <div
        className={'tab active-tab'}
        onClick={() => props.selectTabHandler(props.tab)}
      >
        {props.tab.toUpperCase()}
      </div>
    );
  } else {

    return (
      <div className={'tab'} onClick={() => props.selectTabHandler(props.tab)} >
        {props.tab.toUpperCase()}
      </div>
    );

  }
  /* Using your props, determine if the `tab`
   prop matches the `selectedTab` prop, 
      if they match, the className should be: 
      'tab active-tab', 
      if it is not it should just be 'tab'*/
  
};

Tab.propTypes = {
  tab: PropTypes.string
  };
// Make sure you include PropTypes on your props.

export default Tab;
