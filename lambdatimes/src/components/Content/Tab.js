import React from 'react';
import PropTypes from 'prop-types'; 

const Tab = props => {
    const selectedClass = props.tab === props.selectedTab ? 'tab active-tab' : 'tab'
  return (
    <div
      className={selectedClass}
      onClick={() => {props.selectTabHandler(props.tab)}}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.

Tab.proptypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.function
}

export default Tab;