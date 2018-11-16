import React from 'react';
import Tab from './Tab';
import PropTypes from "prop-types";

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tab => {
          return (
            <Tab
              tab={tab}
              selectedTab={props.selectedTab}
              selectTabHandler={props.selectTabHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = PropTypes.arrayOf(PropTypes.string).isRequired;
export default Tabs;