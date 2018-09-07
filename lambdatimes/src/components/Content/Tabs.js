import React from 'react';
import Tab from './Tab';
import propTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {
          props.tabs.map(tab => {
            return(
              <div>
            <Tab
              selectTabHandler={props.selectTabHandler}
              selectedTab={props.selectedTab}
              tab={tab}
            />
            </div>
          )})
        }
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: propTypes.arrayOf(propTypes.string).isRequired,
  selectedTab: propTypes.string.isRequired,
  selectedTabHandler: propTypes.func.isRequired
}

export default Tabs;
