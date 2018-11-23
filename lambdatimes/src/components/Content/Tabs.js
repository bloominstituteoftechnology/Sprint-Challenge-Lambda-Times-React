import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      
      <div className="topics">
      <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map( (propsinTabs, i) => (
          <Tab 
          key ={propsinTabs.toString()}
          tab = {propsinTabs}
          selectedTab={props.selectedTab}
          selectTabHandler={props.selectTabHandler}
         
          />
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired
}
export default Tabs;