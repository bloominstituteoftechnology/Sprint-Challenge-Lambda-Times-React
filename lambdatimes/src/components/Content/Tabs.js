import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      {/* <h1>Tabs, son!</h1> */}
      
      <div className="topics">
      <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map( (propsinTabs) => (
          <Tab 
          key ={propsinTabs.toString()}
          propsinTab = {propsinTabs}
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
