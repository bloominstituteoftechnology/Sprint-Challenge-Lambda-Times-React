import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

// Props passed in:
  // - tabs: ()
  // - selectedTab: "all"
  // - selectTabHandler: fn()

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {props.tabs.map( (tab) => {
          return (
            <Tab tab={tab} selectedTab={props.selectedTab} selectTabHandler={props.selectTabHandler} ></Tab>
          )
        })}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
};
export default Tabs;
