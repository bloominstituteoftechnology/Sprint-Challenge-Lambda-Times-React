import React from 'react'
import Tab from './Tab'


export default function Tabs(props) {
  const renderTab = (props) => (mappedVal, i) => (
    <Tab tab={mappedVal} postition={i} {...props} />
  )

  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
          {
            props.tabs.map(renderTab({...props}))
          }
      </div>
    </div>
  )
}


// ---- Instructions ----

/* 
  map over the tabs provided on your props, create a new Tab component for each one.
  Give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props.
*/

// Make sure to use PropTypes to validate your types!