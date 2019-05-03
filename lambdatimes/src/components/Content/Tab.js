import React from 'react'
import PropTypes from 'prop-types'

export default function Tab(props) {
  const isSelected = props.tab === props.selectedTab

  return (
    <div
      className={(isSelected) ? 'tab active-tab' : 'tab' }
      onClick={props.selectTabHandler.bind(null, props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

Tab.propTypes = {
  tabs: PropTypes.element,
  tab: PropTypes.element.isRequired,
  selectedTab: PropTypes.element.isRequired,
  selectTabHandler: PropTypes.func.isRequired
}

// ---- Instructions ----

/* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
    if they match, the className should be: 'tab active-tab', 
    if it is not it should just be 'tab'*/

  /* Replace this dummy click handler function with your selectTabHandler function from props.
  You'll need to pass the `tab` in as an argument to this handler. */ 


// Make sure you include PropTypes on your props.
