import React from 'react'

export default function Tab(props) {
  const isSelected = props.tab === props.selectedTab

  return (
    <div
      className={(isSelected) ? 'tab active-tab' : 'tab' }
      onClick={props.handleTabSelect.bind(null, props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}


// ---- Instructions ----

/* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
    if they match, the className should be: 'tab active-tab', 
    if it is not it should just be 'tab'*/

  /* Replace this dummy click handler function with your selectTabHandler function from props.
  You'll need to pass the `tab` in as an argument to this handler. */ 


// Make sure you include PropTypes on your props.
