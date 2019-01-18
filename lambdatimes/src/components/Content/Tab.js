import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
let selectedClass = (props.selectedTab === props.tab) ? 'tab active-tab' : 'tab';
  return (
    <div
      className={selectedClass}
      onClick={() => props.changeSelected(props.tab)}
    >
      
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  changeSelected: PropTypes.func,
  selectedTab: PropTypes.string,
  tabs: PropTypes.string
}

export default Tab;
