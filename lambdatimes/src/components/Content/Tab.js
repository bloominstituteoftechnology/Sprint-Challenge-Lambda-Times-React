import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
    console.log('tab data: ', props)
  const selectedClass = 'tab'
  return (
    <div
      className={props.selectedTab === props.tab ? ".active-tab" : "tab" }
      onClick={() => {props.onclickHandle(props.tab)}}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  selectedTab: PropTypes.string,
  onclickHandle: PropTypes.func,
  tab: PropTypes.string
}

export default Tab;