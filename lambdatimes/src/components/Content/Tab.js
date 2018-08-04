import React from 'react';
import PropTypes from "prop-types";

const Tab = props => {
  const isSelected = props.selectedTab === props.tab;
  const selectedClass = 'tab'
  const activeClass = 'tab active-tab'
  return (
    <div
      className={isSelected ? activeClass : selectedClass}
      onClick={props.handleTab}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

Tab.propTypes = {
  selectedTab: PropTypes.string,
  tab: PropTypes.string,
  handleTab: PropTypes.func
}

export default Tab;