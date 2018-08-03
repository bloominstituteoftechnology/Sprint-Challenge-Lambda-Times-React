import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  const selectedClass = props.tab === props.selectedTab ? 'active-tab' : null;
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

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func
}

export default Tab;