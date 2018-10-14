import React from 'react';
import Tab from './Tab';
import PropTypes from "prop-types"

// const TabComponent = props => {
//   return(<button>{props.name}</button>)
// }
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        <div>
           {props.tabs.map(tab => <Tab 
           filterCards={props.filterCards}
           selectTabHandler = {props.selectTabHandler} 
           selectedTab = {props.selectedTab} 
           tab= {tab} 
           key= {tab} />)}
        </div>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </div>
    </div>
  );
};
Tabs.propTypes = {
	selectTabHandler: PropTypes.func,
	selectedTab: PropTypes.string,
  filterCards: PropTypes.func
}
// Make sure to use PropTypes to validate your types!
export default Tabs;
