import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  console.log("props in Tabs, ", props)
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map( tab => (
          < Tab 
            tab={tab} 
            key={tab} 
            selectTabHandler={props.selectTabHandler} 
            selectedTab={props.selectedTab} 
          /> 
        ))}      
      </div>
    </div>
  );
};

Tabs.propTypes = {
	tabs: PropTypes.arrayOf(PropTypes.string),
	selectedTab: PropTypes.string,
	selectTabHandler: PropTypes.func
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
