import React from 'react';

const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  const selectedClass = 'tab'
    if (tab === props.tab.selected) {
      selectedClass = 'tab active-tab'
    }
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
Tab.propTypes = PropTypes.string.isRequired

export default Tab;