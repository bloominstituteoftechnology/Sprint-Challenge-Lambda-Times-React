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
            key={`${tab}-key`}
            tab={tab}
            selectedTab={props.selectedTab}
            selectTabHandler={props.selectTabHandler}
          />
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabData: PropTypes.arrayOf(PropTypes.string)
}

export default Tabs;
