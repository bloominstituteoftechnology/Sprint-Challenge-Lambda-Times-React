import React from 'react';
import Tab from './Tab'
import PropTypes from 'prop-types';

const Tabs = props => {
  console.log(props.selectedTab)
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((item, index) => 
          <Tab 
            key={index}
            selectTabHandler={item.selectTabHandler}
            selectedTab={item.selectedTab}
            tab={item}
        />)}
      </div>
    </div>
  )
}

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.string)
};

export default Tabs