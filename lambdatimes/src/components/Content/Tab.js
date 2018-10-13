import React from 'react';
import PropTypes from 'prop-types';

// Props taken in:
  // - tab: ""
  // - selectedTab: "all"
  // - selectTabHandler: fn()

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  const tabClass = props.selectedTab === props.tab ? "tab active-tab" : "tab";

  const tabHandler = () => {
    props.selectTabHandler(props.tab);
  };

  return (
    <div
      className={tabClass}
      onClick={tabHandler}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.defaultProps = {
  selectedTab: 'all'
};

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
};
export default Tab;
