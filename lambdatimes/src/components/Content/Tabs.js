import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
{console.log(props)}



 {props.tabs.map((tab, index) => {

          return <Tab key={index} tab={tab} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} tabs={props.tabs} />
        })}
       
 

        
        
        
        
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </div>
    </div>
  );
};

this.tabData = {
  tabData: PropTypes.arrayOf(PropTypes.string)
}

// Make sure to use PropTypes to validate your types!
export default Tabs;
