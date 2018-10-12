import React from 'react';
import Tab from './Tab';

const TabComponent = props => {
  return(<button>{props.name}</button>)
}
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        <div>
  {props.tabs.map(tab => <Tab selectTabHandler = {this.selectTabHandler} selectedTab = {this.selectedTab} tab= {tab}></Tab>)}
        </div>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
