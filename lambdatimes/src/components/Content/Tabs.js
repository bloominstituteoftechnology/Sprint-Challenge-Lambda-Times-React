import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

/* <Tabs tabs={this.state.tabs} /> */

/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map (tab => {
          return (
            <Tab tab = {tab}
            selectedTabHandler = {props.selectedTabHandler}
            selectedTab = {props.selectedTab}
            />
          );
        })}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!

Tabs.propTypes = {
  Tab: PropTypes.arrayOf(
    PropTypes.shape({ 
      tab: PropTypes.string,
      selectedTabHandler: PropTypes.string,
      selectedTab: PropTypes.string,
    })
  ),
};
// ^^^ this one was confusing 
export default Tabs;
