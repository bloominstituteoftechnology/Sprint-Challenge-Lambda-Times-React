import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
      if they match, the className should be: 'tab active-tab',
      if it is not it should just be 'tab'*/
      let classNameToggle;
      if(props.tab === props.selectedTab) {
          classNameToggle = 'tab active-tab';
      } else {
          classNameToggle = "tab";
      }
  return (
    <div
      className={classNameToggle}
      onClick={() => props.selectTabHandler}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes   =   {
    tab:    PropTypes.string.isRequired,
    selectedTab:    PropTypes.string.isRequired,
    selectTabHandler:   PropTypes.func.isRequired,
}

export default Tab;
