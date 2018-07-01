import React from 'react';
import Tab from './Tab'
import PropTypes from 'prop-types';


const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {
          props.tabs.map((tab) => {
            return (
              <Tab 
              oneTab={tab}
              key={Math.random()}
              selectedTab={props.selectedTab}
              selectTabHandler={props.selectTabHandler}
              />
            );
          })
        }
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/ }
      </div>
    </div>
  )
}

Tabs.propTypes = {
  selectTabHandler: PropTypes.function,
  selectedTab: PropTypes.string,
  tabs: PropTypes.array,
}

// Make sure to use PropTypes to validate your types!
export default Tabs