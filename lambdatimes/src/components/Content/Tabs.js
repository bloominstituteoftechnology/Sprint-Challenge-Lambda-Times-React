import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(item =>{
          return(
          <Tab 
          key={item}
           selectTabHandler={props.selectTabHandler}
           selectedTab={props.selectedTab}
           tab={item}
         >
          </Tab>
          )
        })
          /* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            
      </div>
    </div>
  );
};
Tabs.PropTypes={
  key: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string.isRequired,
  tab: PropTypes.object

}
// Make sure to use PropTypes to validate your types!
export default Tabs;
