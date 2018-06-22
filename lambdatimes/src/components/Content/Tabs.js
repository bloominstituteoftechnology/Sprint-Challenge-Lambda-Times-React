import React from 'react';
import Tab from './Tab'
import uuidv1 from 'uuid/v1';
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/ }

            {
              props.tabs.map(tab => {
                return <Tab key = {uuidv1()} tab ={tab}/>;
              })
            }
      </div>
    </div>
  )
}

// Make sure to use PropTypes to validate your types!
export default Tabs