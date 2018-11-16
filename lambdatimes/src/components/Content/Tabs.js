import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
const Tabs = ({tabs, selectedTab, selectTabHandler}) => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {tabs.map((tab, index) => <Tab tab={tab} key={index} selectedTab={selectedTab} selectTabHandler={selectTabHandler} />)}
      </div>
    </div>
  );
};

Tabs.propTypes = {

  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,

}

export default Tabs;
