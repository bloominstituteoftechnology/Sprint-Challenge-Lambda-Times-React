import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/ }
        {this.state.tabs.map((tab, i) => 
        <Tab 
          key={i} 
          tab={tab}
          selectTabHandler={props.selectTabHandler}
          selectedTab={props.selectTab}
        />)}

      </div>
    </div>
  )
}

Tabs.PropTypes= {
  tabs: PropTypes.shape()
};

// Make sure to use PropTypes to validate your types!
export default Tabs;