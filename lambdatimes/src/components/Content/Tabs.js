import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(element => (
          <Tab
            key={element.headline}
            tab={element}
            selectedTab={props.selectedTab}
            selectedTabHandler={props.selectedTabHandler}
          />
        ))}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabData: PropTypes.arrayOf(PropTypes.string)
};

export default Tabs;
