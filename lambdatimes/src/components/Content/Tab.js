import React from 'react';
import PropTypes from 'prop-types';
const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      let selectedClass = 'tab'
      if(props.selected === true)
      selectedClass = 'tab active-tab';
  return (
    <div className={selectedClass} onClick={(props.selectTabHandler)}>
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
Tab.propTypes = {
  selected : PropTypes.bool,
  tab : PropTypes.string,
  selectTabHandler : PropTypes.func
}