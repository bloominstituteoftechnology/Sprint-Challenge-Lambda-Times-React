import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tab=> <Tab tab={tab} selectedTab={props.selectedTab} selectTabHandler={props.selectTabHandler} filterCards={props.filter}/>)}
      </div>
    </div>
  );
};


Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string)
};

export default Tabs;
