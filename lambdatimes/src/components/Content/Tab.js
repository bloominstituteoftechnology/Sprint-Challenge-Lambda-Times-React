import React from 'react';
import PropTypes from "prop-types"

const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  const selectedClass = `tab {
    props.selected === props.tab ?
    'active-tab'
    : ' '
  }`
  return (
    <div
      className={""}
      onClick={() => {props.selectedTabHandler(props.tab)}}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

Tab.PropTypes = {
  tab: PropTypes.string,
  selected: PropTypes.string,
  selectTabHandler: PropTypes.string
}

export default Tab;
