import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((aTab, i) => {
          return (
          <Tab 
          selectedTabHandler={props.selectedTabHandler} 
          selectedTab={props.selectedTab} 
          tab={aTab}
          key={i}
          />);
        })}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  selectedTabHandler: PropTypes.func,
  selectedTab: PropTypes.string,
  tab: PropTypes.arrayOf(PropTypes.string),
}
export default Tabs;
{/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}