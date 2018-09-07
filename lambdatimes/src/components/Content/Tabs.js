import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {console.log('inside Tabs.js', props.tabsProps)}
        {props.tabsProps.map((element, index) => {
          return <Tab key={index} tabProps={element} selectedTab={props.selectedTab} selectTabHandler={props.selectTabHandler}/>
        })}
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </div>
    </div>
  );
};


Tabs.propTypes = {
  tabsProps: PropTypes.arrayOf(PropTypes.string),
}
//PropTypes Checking for this file cleared!

// Make sure to use PropTypes to validate your types!
export default Tabs;
