import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tab => (
        <Tab 
        key={tab} 
        tab={tab} 
        selectedTab ={props.selectedTab} 
        selectTabHandler={props.selectTabHandler}/>
        ))}
      </div>
    </div>
  );
};


Tabs.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
}

export default Tabs;
