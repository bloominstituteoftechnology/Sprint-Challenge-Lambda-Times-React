import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'
const Tabs = props => {
  console.log("Tabs props:", props);
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
              
              props.tabs.map(tab => {
                return(
                  
                  <Tab 
                  key={Date.now() * Math.random()} 
                  tab={tab} 
                  changeSelected={props.changeSelected}
                  selectedTab={props.selectedTab}
                  /*selectTabHandler={props.selectTabHandler}*/ /> 
                )
              })
            }
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!

Tabs.propTypes ={
  changeSelected: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Tabs;
