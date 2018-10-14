import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const Tabs = props => {
  return (
    <div className="tabs"   >
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(item => {
        return <Tab selectTabHandler = {props.selectTabHandler} selectedTab={props.selectedTab} tab={item} key={item} />; 
         })
          /* map over the tabs provided on your props, create a
           new Tab component for each one.
            give the tab component a `selectTabHandler`,
             the `selectedTab`, and the `tab` itself as props*/}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
  };


// Make sure to use PropTypes to validate your types!
export default Tabs;
