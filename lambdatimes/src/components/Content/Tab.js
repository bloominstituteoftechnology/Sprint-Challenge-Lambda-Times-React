import React from 'react';
import PropTypes from 'prop-types';
const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={""}
      className = {` tab ${props.tab === props.selectedTab ? 'active-tab' : ''}`}
      onClick={() => {props.selectedTabHandler(props.tab);}}>

      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab:PropTypes.string,
  selectedTabHandler: PropTypes.string,
}

export default Tab;
