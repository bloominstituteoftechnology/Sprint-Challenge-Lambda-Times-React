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
            key={tab.headline}
            tab={tab}
            selectedTab={props.selectedTab}
            selectedTabHandler={props.selectedTabHandler}
          />
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabData: PropTypes.arrayOf(PropTypes.string)
}

// Make sure to use PropTypes to validate your types!
export default Tabs;
