import React from 'react';
import PropTypes from 'prop-types';
const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  const selectedClass = `${props.selectedTab}`
  return (
    <div
      className={selectedClass===props.selectedTab?"tab active-tab":'tab'}
      onClick={() => {props.selectedTabHandler(props.tab)}}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.
Tab.propTypes={
  selectedTabHander: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired
}
export default Tab;