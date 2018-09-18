import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  console.log(Tabs, this.state);
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
       
            {props.tabs.map(tab => (
            <Tab
            key={tab}
            tab={tab} 
            selectedTab={props.selectedTab} //is change selected = selcted: tab
            selectTabHandler={props.selectTabHandler} /> ))} 
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.function
}
export default Tabs;

//  {/* map over the tabs provided on your props, create a new Tab component for each one. give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
